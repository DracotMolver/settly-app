<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Hash;

use App\Http\Requests\RegisterPostRequest;
use App\Models\Admin;



class RegisterController extends Controller
{
    protected $adminUser;

    public function __construct(Admin $adminUser)
    {
        $this->adminUser = $adminUser;
    }

    /**
     * Store a new Admin in the database.
     *
     * @param  App\Http\Requests\RegisterPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RegisterPostRequest $request)
    {
        $validatedData = $request->validated();

        $this->adminUser->name = $validatedData['name'];
        $this->adminUser->email = $validatedData['email'];
        $this->adminUser->password = Hash::make($validatedData['password']);

        $saved = $this->adminUser->save();

        $msg = $saved ? 'succes' : 'fail';
        $status = $saved ? 200 : 422;

        return response()->json(['message' => $msg], $status);
    }
}
