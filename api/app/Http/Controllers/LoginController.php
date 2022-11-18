<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Crypt;

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

        $dataContent = [];
        $reStatus = 422;

        if ($foundAmdinUser) {
            if ($this->isValidPassWord($validatedData['password'], $foundAmdinUser->password)) {
                // Create token to send to the front
                $token = Crypt::encryptString(
                    [
                        'expDate' => now()->addDay(),
                        'email' => $foundAmdinUser->email
                    ]
                );

                // Safe the token on the Access model
                $saved = $foundAmdinUser->access()->save(new Access([
                    'token' => $token
                ]));

                $dataContent = $saved ? ['token' => $token] : [];
                $reStatus = $saved ? 200 : 422;
            } else {
                // Error Messsage
                $dataContent = ['message' => 'Data incorrect'];
            }
        } else {
            // Error Messsage
            $dataContent = ['message' => 'User not found'];
        }


        return  response()->json($dataContent, $reStatus);
    }
}
