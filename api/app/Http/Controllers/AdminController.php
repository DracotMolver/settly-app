<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Store a new Admin in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $adminUser = new Admin;

        $adminUser->name = $request->name;
        $adminUser->email = $request->email;
        $adminUser->password = $request->password;

        $adminUser->save();

        $this->response()->ok();
    }
}
