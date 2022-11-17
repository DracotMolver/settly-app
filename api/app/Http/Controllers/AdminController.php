<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;

use App\Http\Requests\RegisterPostRequest;

use App\Models\Access;
use App\Models\Admin;

class AdminController extends Controller
{

    function __construct(Admin $admin)
    {
        $this->$admin = $admin;
    }

    /**
     * Retrive the found admin from the database.
     * This might help to the front to grant acces to the private area of the app.
     * Nevertheless is not giving athorization to do actions over the Client model
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $validated = Validator::make($request->all(), [
        //     'email' => 'required|email',
        //     'password' => [
        //         'required',
        //         Password::min(6)
        //             ->letters()
        //             ->numbers()
        //     ]
        // ]);


        // if ($validated->fails()) {
        //     return response($validated->errors()->jsonSerialize(), 422);
        // }

        // // find the admin user on the database
        // $adminUser = Admin::where('email', $request->email)->first();

        // if ($adminUser) {
        //     if (Hash::check($request->password, $adminUser->password)) {
        //         // Create token to send to the front
        //         $token = Hash::make(now());

        //         // Safe the token on the Access model
        //         $access = new Access;
        //         $access->token = $token;
        //         $access->save();

        //         return response()->json(['token' => $token]);
        //     }

        //     return  response()->json(['message' => 'Data incorrect'], 403);
        // }

        // return  response()->json(['message' => 'User not found'], 422);
    }
}
