<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ClientTest extends TestCase
{
    use WithoutMiddleware;

    /**
     * Get all the clients by admin user.
     *
     * @return void
     */
    public function test_get_all_clients_by_admin_error()
    {
        // $response = $this->getJson('/api/clients');

        // $response->assertStatus(500);
        // $response->assertJson([
        //     'created' => true,
        // ]);
    }
}
