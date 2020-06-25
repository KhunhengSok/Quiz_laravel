<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    public function sections(){
        return $this->hasMany(Section::class);
    }

    public function owner(){
        return $this->belongsTo(User::class);
    }

    protected $guarded = [];
}
