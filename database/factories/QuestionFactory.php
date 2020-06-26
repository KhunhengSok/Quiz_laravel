<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Question;
use Faker\Generator as Faker;

$factory->define(Question::class, function (Faker $faker) {
    return [
        'question_order' => $faker->numberBetween($min = 1, $max=10),
        'question' => $faker->sentence($nbWords = 10, $variableNbWords = true),
        'max_score' => $faker->numberBetween(5,20),
        // 'section_id' => $faker->randomNumber($digit=2),
        'section_id' => function(){
            return factory(App\Models\Section::class)->create()->id;
        },
    ];
});
