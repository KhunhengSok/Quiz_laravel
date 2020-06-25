<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\AnswerChoice;
use Faker\Generator as Faker;

$factory->define(AnswerChoice::class, function (Faker $faker) {
    return [
        'choice_order' => $faker->numberBetween($min=1, $max=4),
        'choice' => $faker->sentence($nbsWords=10, $variableNbWords=true),
        'description' => $faker->sentence($nbsWords=10, $variableNbWords=true),
        'is_correct'  => $faker->boolean($chanceOfGettingTrue=0.25),
        'question_id' => function(){
            return factory(App\Models\Question::class)->create()->id ;
        }


    ];
});
