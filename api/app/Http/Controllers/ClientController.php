<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\Client;

use Illuminate\Http\Request;

class ClientController extends Controller
{

    /**
     * Store a new Client in the database.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) {
        $client = new Client;

        $client->name = $request->name;
        $client->email = $request->email;

        // don't block the database save action
        // $id = Auth::id();
        $adminUser = Admin::find(1);

        $adminUser->clients()->save($client);

        // Processes the image to save it on the public folder
        $imageName = time().'.'.$request->picture->extension();
        $request->picture->move(public_path('images'), $imageName);

        $foundClient = Client::find($client);

        return response()->json([
            'data' => [
                'name' => $foundClient->toJson()
            ],
            'message'=> 'data saved successfully'
        ]);
    }
}
