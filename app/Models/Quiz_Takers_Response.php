<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz_Takers_Response extends Model
{
    public function taker(){
        return $this->belongsTo(Respondent::class, 'taker_id');
    }

//    public function quiz(){
//        return $this->belongsTo(Quiz::class);
//    }

    public function question(){
        return $this->belongsTo(Question::class);
    }

    protected $guarded = [];
}
