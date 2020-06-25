<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    public function section(){
        return $this->belongsTo(Section::class);
    }

    public function answers(){
        return $this->hasMany(AnswerChoice::class);
    }

    public function all_responses(){
        return $this->hasMany(Quiz_Takers_Response::class);
    }

    protected $guarded = [];

}
