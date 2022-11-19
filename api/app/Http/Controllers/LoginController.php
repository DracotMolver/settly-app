<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Crypt;
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

    /**
     * Store a new Admin in the database.
     *
     * @param  App\Http\Requests\LoginPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LoginPostRequest $request)
    {
        $validatedData = $request->validated();


        $foundAmdinUser = $this->adminUser->findByEmail($validatedData['email']);

        $dataContent = [];
        $reStatus = 422;

        if ($foundAmdinUser) {
            if ($this->isValidPassword($validatedData['password'], $foundAmdinUser->password)) {
                // Create token to send to the front
                $token = $this->makeToken($foundAmdinUser->email);

                // Safe the token on the Access model
                $saved = $foundAmdinUser->access()->save(new Access([
                    'token' => $token
                ]));

                $dataContent = $saved ? ['token' => $token, 'admin' => $foundAmdinUser->toJson()] : [];
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

    protected function isValidPassword($requestPassword, $adminUserPassword)
    {
        return Hash::check($requestPassword, $adminUserPassword);
    }

    protected function makeToken($email)
    {
        return Crypt::encryptString(
            collect([
                'expDate' => now()->addMinutes(30)->getTimestamp(),
                'email' => $email
            ])->toJson()
        );
    }
}
