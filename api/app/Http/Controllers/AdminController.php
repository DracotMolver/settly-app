<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

use Illuminate\Validation\Rules\Password;

use Illuminate\Http\Request;

use App\Models\Admin;

class AdminController extends Controller
{
    /**
     * Retrive the found admin from the database.
     * This might help to the front to grant acces to the private area of the app.
     * Nevertheless is not giving athorization to do actions over the Client model
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index() {

    }

    /**
     * Store a new Admin in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $adminUser = new Admin;

        $validated = Validator::make($request->all(), [
            'name' => 'required|alpha|min:3',
            'email' => 'required|email',
            'password' => [
                'required',
                'confirmed',
                Password::min(8)
                    ->letters()
                    ->numbers()
                    ->symbols()
            ]
        ]);

        if ($validated->fails()) {
            return response($validated->errors()->jsonSerialize(), 403);
        }

        $adminUser->name = $request->name;
        $adminUser->email = $request->email;
        $adminUser->password = Hash::make($request->password);

        $saved = $adminUser->save();


        $msg = $saved ? 'succes' : 'fail';
        $status = $saved ? 200 : 403;

        return response()->json(['message' => $msg], $status);
    }
}
