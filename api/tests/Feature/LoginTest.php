<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;

use Database\Seeders\AdminSeeder;

use Tests\TestCase;

class LoginTest extends TestCase
{

    use RefreshDatabase;

    public function test_user_log_fail_no_exist()
    {
        $response = $this->post("api/login", [
            "email" => fake()->unique()->safeEmail(),
            "password" => "123password",
        ]);

        $response->assertStatus(422);
        $response->assertJson(["message" => "User not found"]);
    }

    public function test_user_log_fail_with_wrong_data()
    {
        $response = $this->post("api/login", [
            "email" => "no es un email",
            "password" => "_wo",
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors(["email", "password"]);
    }

    public function test_found_user_with_password_is_incorrect()
    {

        $this->seed();

        $this->seed(AdminSeeder::class);

        $response = $this->post("api/login", [
            "email" => "diego@test.com",
            "password" => "diego1234",
        ]);

        $response->assertStatus(422);
        $response->assertJson(["message" => "Data incorrect"]);
    }
    
    public function test_make_token_and_retreives_to_the_client()
    {

        $this->seed();

        $this->seed(AdminSeeder::class);

        $response = $this->post("api/login", [
            "email" => "diego@test.com",
            "password" => "123rootadmin",
        ]);

        $response->assertStatus(200);
    }
}
