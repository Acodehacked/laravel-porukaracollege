<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        // User::factory()->create([
        //     'name' => 'Abin Antony',
        //     'email' => 'abin@example.com',
        //     'password'=>'Abin@1234'
        // ]);

        User::factory()->create([
            'name' => 'Porukara College',
            'email' => 'porukaracollege@gmail.com',
            'password'=>'PorukaraCollege2025cmi'
        ]);
    }
}
