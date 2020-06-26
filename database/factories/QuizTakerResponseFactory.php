<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Quiz_Takers_Response::class, function (Faker $faker) {
    return [
        'chosen_choice_id'      => $faker->numberBetween(1,50),
        'scored'                => $faker->numberBetween(60,100),
        'taker_id'              => $faker->numberBetween(1,50),
        'question_id'           => $faker->numberBetween(1,50),
        'section_id'            => $faker->numberBetween(1,50),
        'quiz_id'               => $faker->numberBetween(1,50),

    ];
});
