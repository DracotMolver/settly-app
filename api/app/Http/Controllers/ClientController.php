<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientPostRequest;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

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
        $adminUser = $this->getAdminUser($request);
        return response()->json($adminUser->clients, 200);
    }

    /**
     * remove a single client by admin
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $clientId = $request->client;
        $isDeleted = $this->client->find($clientId)->delete();

        $msg = $isDeleted ? $clientId : null;
        $reqStatus = $isDeleted ? 200 : 422;

        return response()->json(['id' => $msg], $reqStatus);
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

        $content = [];
        $reqStatus = 422;

        // send an error if the client already exist for this admin user
        if ($this->clientDoesNotExist($validatedData['email'])) {
            $this->client->name = $validatedData['name'];
            $this->client->email = $validatedData['email'];
            $this->client->picture = $this->saveImage($request->file('picture'));

            $adminUser = $this->getAdminUser($request);

            $adminUser->clients()->save(
                $this->client
            );

            $adminUser->refresh();

            $content = $adminUser->clients;
            $reqStatus = 200;
        } else {
            $content = ["message" => "Client already assigned to you"];
            $reqStatus = 405;
        }

        return response()->json($content, $reqStatus);
    }

    /**
     * Update a client on the database.
     *
     * @param  App\Http\Requests\ClientPostRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function udpate(ClientPostRequest $request)
    {
        $validatedData = $request->validated();

        $client = $this->client->find($request->client);

        $client->name = Str::lower($validatedData['name']);
        $client->email = Str::lower($validatedData['email']);

        $saved = $client->save();

        $content = $saved ? $client : [];
        $reqStatus = $saved ? 200 : 422;

        return response()->json($content, $reqStatus);
    }

    protected function saveImage($image)
    {
        $image->store('public');
        return Storage::url($image->hashName);
    }


    protected function clientDoesNotExist($email)
    {
        return !$this->client->findByEmail(Str::lower($email));
    }

    protected function getAdminUser($request)
    {
        $adminUser = $this->access->findByToken($request->bearerToken())
            ->admin()
            ->first();

        return $adminUser;
    }
}
