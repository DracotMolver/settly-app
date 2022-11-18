<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientPostRequest;
use App\Http\Requests\ClientPutRequest;

use Illuminate\Http\Request;
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
            $this->client->picture = $this->saveImg($request);

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
     * @param  App\Http\Requests\ClientPutRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function update(ClientPutRequest $request, $id)
    {
        $validatedData = $request->validated();

        $client = $this->client->find(intval($id));

        $client->name = Str::lower($validatedData['name']);
        $client->email = Str::lower($validatedData['email']);
        $client->picture = $this->saveImg($request);

        $saved = $client->save();

        $client->refresh();

        $content = $saved ? $client : [];
        $reqStatus = $saved ? 200 : 422;

        return response()->json($content, $reqStatus);
    }

    /**
     * Get the client. if the model doesn't exist it will return true
     *
     * @param  App\Http\Requests\ClientPutRequest  $request
     * @return App\Models\Admin;
     */
    protected function clientDoesNotExist($email)
    {
        return !$this->client->findByEmail(Str::lower($email));
    }

    /**
     * Get the logged admin from the token access
     *
     * @param  App\Http\Requests\ClientPutRequest  $request
     * @return App\Models\Admin;
     */
    protected function getAdminUser($request)
    {
        $adminUser = $this->access->findByToken($request->bearerToken())
            ->admin()
            ->first();

        return $adminUser;
    }

    /**
     * Save the miage only if it is available.
     * return null or the image path
     *
     * @param  App\Http\Requests\ClientPutRequest  $request
     * @return string
     */
    protected function saveImg($request)
    {
        $img = $request->file('picture');

        if ($img) {
            $img = $img->store('public');
        }

        return $img;
    }
}
