<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Quiz;
use Faker\Generator as Faker;

$factory->define(Quiz::class, function (Faker $faker) {
    return [
        'title'         => $faker->sentence($nbWords=10, $variableNbWords=true),
        'description'   => $faker->sentence($nbWords=15, $variableNbWords=true),
        'start_time'    => $faker->time(),
        'total_time'    => $faker->numberBetween(50,100),
        'published_time'=> now(),
        'start_date'    => $faker->date(),
        'owner_id'      => function(){
            return factory(App\Models\User::class)->create()->id;
        },
        'is_published'  => $faker->boolean(),
    ];
});
