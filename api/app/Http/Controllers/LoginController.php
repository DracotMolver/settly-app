<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;

use App\Http\Requests\LoginPostRequest;
use App\Models\Access;
use App\Models\Admin;

class LoginController extends Controller
{
    protected $adminUser;

    public function __construct(Admin $adminUser)
    {
        $this->adminUser = $adminUser;
    }

    protected function isValidPassWord($requestPassword, $adminUserPassword)
    {
        return Hash::check($requestPassword, $adminUserPassword);
    }

    /**
     * Store a new Admin in the database.
     *
     * @param  App\Http\Requests\LoginPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LoginPostRequest $request)
    {
        $validatedData = $request->validated();

        $foundAmdinUser = $this->adminUser->existWithEmail($validatedData['email']);

        if ($foundAmdinUser) {
            if ($this->isValidPassWord($validatedData['password'], $foundAmdinUser->password)) {
                // Create token to send to the front
                $token = Hash::make(now());

                // Safe the token on the Access model
                $saved = $foundAmdinUser->access()->save(new Access([
                    'token' => $token
                ]));

                $msg = $saved ? $token : null;
                $status = $saved ? 200 : 422;

                return response()->json(['token' => $msg], $status);
            }

            return  response()->json(['message' => 'Data incorrect'], 403);
        }

        return  response()->json(['message' => 'User not found'], 422);
    }
}
