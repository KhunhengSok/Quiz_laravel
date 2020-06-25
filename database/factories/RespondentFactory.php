<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(\App\Models\Respondent::class, function (Faker $faker) {
    return [
        'email'     => $faker->unique()->email(),
        'name'      => $faker->name(),
    ];
});
