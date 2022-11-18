<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientPostRequest;

use \Illuminate\Http\Request;

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
     * retrieves all the clientes by admin
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $adminUser = $this->access->findByToken($request->bearerToken())
            ->admin()
            ->first();

        return response()->json($adminUser->clients, 200);
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

        $adminUser->refresh();

        $request->file('picture')->store('public');

        return response()->json($adminUser->clients, 200);
    }
}
