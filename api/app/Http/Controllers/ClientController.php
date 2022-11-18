<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientPostRequest;
use App\Models\Access;
use App\Models\Client;

class ClientController extends Controller
{

    protected $client;
    protected $access;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(Client $client, Access $access)
    {
        $this->client = $client;
        $this->access = $access;

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


        $adminUser = $this->access->findByToken($request->bearerToken())
            ->admin()
            ->first();

        $adminUser->clients()->save(
            $this->client
        );


        // // Processes the image to save it on the public folder
        // $imageName = time() . '.' . $request->picture->extension();
        // $request->picture->move(public_path('images'), $imageName);

        // $foundClient = Client::find($client);

        return response()->json(['data' => 'asdf'], 200);
    }
}
