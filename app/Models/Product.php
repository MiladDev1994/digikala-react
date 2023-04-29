<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

//    public function categories(){
//        return $this->morphToMany(Categories::class , 'categoryable');
//    }

//    public function varieties(){
//        return $this->hasMany(Variety::class , 'dkp');
//    }
}
