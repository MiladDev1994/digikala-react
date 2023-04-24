<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Variety extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class , 'user_id');
    }

    public function product(){
        return $this->hasMany(Product::class , 'id' , 'dkp');
    }

    public function categories(){
        return $this->morphToMany(Category::class , 'categoryable');
    }

    public function warranty(){
        return $this->belongsTo(Warranty::class , 'Warranty');
    }

    public function brand(){
        return $this->belongsTo(Brand::class , 'brand_id');
    }
    public function type(){
        return $this->belongsTo(Color::class , 'variety' , 'id');
    }
}
