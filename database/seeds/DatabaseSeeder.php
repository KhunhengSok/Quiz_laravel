<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        factory(App\Models\AnswerChoice::class, 50)->create();
        factory(App\Models\Quiz_Takers_Response::class, 100)->create();
        factory(App\Models\Quiz_Respondent::class, 50)->create();
        factory(App\Models\Respondent::class, 50)->create();
    }
}
