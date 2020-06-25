<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Section;
use Faker\Generator as Faker;

$factory->define(Section::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence($nbWords = 10, $variableNbWords= true),
        'description' => $faker->sentence($nbWords = 10, $variableNbWords= true),
        'section_order' => $faker->numberBetween($min=1, $max=10),
        'quiz_id' => function(){
            return factory(App\Models\Quiz::class)->create()->id;
        }

    ];
});
