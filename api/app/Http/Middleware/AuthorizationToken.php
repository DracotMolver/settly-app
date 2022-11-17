<?php

namespace App\Http\Middleware;

use App\Models\Access;
use Closure;

use Illuminate\Http\Request;

use Illuminate\Support\Str;

class AuthorizationToken
{
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

        if (Str::of($token)->trim()->isEmpty()) {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }

        $foundtoken = Access::where('token', $token)->first();

        if ($foundtoken) {
            return $next($request);
        }

        return response()->json(['error' => 'Unauthenticated'], 401);
    }
}
