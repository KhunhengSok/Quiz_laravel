<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz_Respondent extends Model
{
    public function respondents(){
        return $this->hasMany(Respondent::class);
    }

    public function quiz(){
        return $this->hasMany(Quiz::class);
    }

    public $guarded = [];
}
