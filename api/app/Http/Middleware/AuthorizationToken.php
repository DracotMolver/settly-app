<?php

namespace App\Http\Middleware;

use Closure;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Contracts\Encryption\DecryptException;

use App\Models\Access;

class AuthorizationToken
{

    protected $access;

    public function __construct(Access $access)
    {
        $this->access = $access;
    }

    /**
     * Handle an incoming request. and check if the given bearerToken exist
     * in the database. the token it will persiste until the user actually logoust the app
     * TODO: remove after a period of time
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->bearerToken();

        if ($this->isNotEmptyToken($token)) {
            try {
                $decrypted = $this->getValuesFromToken($token);

                if (now()->getTimestamp() < ($decrypted["expDate"])) {
                    return $next($request);
                }

                return response()->json(['error' => 'Unauthorized'], 401);
            } catch (DecryptException $e) {
                //
            }
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    protected function getValuesFromToken($token)
    {
        return json_decode(Crypt::decryptString($token), true);
    }


    protected function isNotEmptyToken($token)
    {
        return Str::of($token)->trim()->isNotEmpty();
    }
}
