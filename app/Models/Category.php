<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    public function Child(){
        return $this->hasMany(Category::class ,'parent_id' , 'id');
    }

    public function products(){
        return $this->morphedByMany(Product::class , 'categoryable');
    }

    public function varieties()
    {
        return $this->morphedByMany(Variety::class , 'categoryable');
    }
}
