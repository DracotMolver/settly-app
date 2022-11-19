<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

use App\Models\Admin;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Admin::factory(10)->create();

        DB::table('admins')->insert([
            'name' => "diego",
            'email' => "diego@test.com",
            'password' => Hash::make('123rootadmin'),
        ]);
    }
}