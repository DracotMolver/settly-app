<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;

use Tests\TestCase;

class RegisterTest extends TestCase
{

    use RefreshDatabase;

    public function test_insert_new_admin_succcefully()
    {
        $response = $this->post("api/register", [
            "name" => "diego",
            "email" => fake()->unique()->safeEmail(),
            "password" => "123password",
            "password_confirmation" => "123password"
        ]);

        $response->assertStatus(200);
        $response->assertJson(["message" => "success"]);
    }

    public function test_insert_new_admin_and_return_it()
    {
        $response = $this->post("api/register", [
            "name" => "diego",
            "email" => "diego@diego.test",
            "password" => "123password",
            "password_confirmation" => "123password"
        ]);

        $response->assertStatus(200);
        $response->assertJson(["message" => "success"]);

        $this->assertDatabaseHas("admins", [
            "email" => "diego@diego.test",
        ]);
    }


    public function test_failed_two_names()
    {
        $fakeEmail = fake()->unique()->safeEmail();

        $response = $this->post("api/register", [
            "name" => "hola.hola",
            "email" => $fakeEmail,
            "password" => "123password",
            "password_confirmation" => "123password"
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors("name");
        $this->assertDatabaseMissing("admins", [
            "email" => $fakeEmail,
            "name" => "hola.hola",
        ]);
    }

    public function test_password_and_password_confirmation_do_not_match()
    {
        $fakeEmail = fake()->unique()->safeEmail();

        $response = $this->post("api/register", [
            "name" => "hola.hola",
            "email" => $fakeEmail,
            "password" => "123passwrd",
            "password_confirmation" => "123password"
        ]);

        $response->assertStatus(302);
        $response->assertSessionHasErrors("password");
        $this->assertDatabaseMissing("admins", [
            "email" => $fakeEmail,
            "name" => "hola.hola",
        ]);
    }
}
