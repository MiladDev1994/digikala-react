<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    use HasFactory;

    protected $fillable = ['variety_id' , 'product_id' , 'quantity' , 'price' , 'price_off' , 'user_id' , 'type_id'];

    public function variety(){
        return $this->hasOne(Variety::class , 'id' , 'variety_id');
    }

    public function product(){
        return $this->hasMany(Product::class , 'id' , 'product_id');
    }

    public function type(){
        return $this->hasOne(Color::class , 'id' , 'type_id');
    }
}
