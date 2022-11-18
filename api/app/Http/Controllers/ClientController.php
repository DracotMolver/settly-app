<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientPostRequest;
use App\Models\Admin;
use App\Models\Client;


class ClientController extends Controller
{

    protected $client;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(Client $client)
    {
        $this->$client = $client;

        $this->middleware('auth.token');
    }

    /**
     * Store a new Client in the database.
     *
     * @param  App\Http\Requests\ClientPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientPostRequest $request)
    {
        $validatedData = $request->validated();

        $this->client->name = $validatedData['name'];
        $this->client->email = $validatedData['email'];

        // // don't block the database save action
        // // $id = Auth::id();
        // $adminUser = Admin::find(1);

        // $adminUser->clients()->save($client);

        // // Processes the image to save it on the public folder
        // $imageName = time() . '.' . $request->picture->extension();
        // $request->picture->move(public_path('images'), $imageName);

        // $foundClient = Client::find($client);

        // return response()->json([
        //     'data' => [
        //         'name' => $foundClient->toJson()
        //     ],
        //     'message' => 'data saved successfully'
        // ]);
    }
}
