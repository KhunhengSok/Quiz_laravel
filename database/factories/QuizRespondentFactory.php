<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Quiz_Respondent::class, function (Faker $faker) {
    return [
        'respondent_id' => $faker->numberBetween(1,50),
        'quiz_id'       => $faker->numberBetween(1,50),
        'scored'        => $faker->numberBetween(60,100),
        'finish_time'   => $faker->dateTime(),
    ];
});
