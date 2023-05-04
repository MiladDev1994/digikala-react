<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basket extends Model
{
    use HasFactory;

    protected $fillable = ['variety_id' , 'product_id' , 'quantity' , 'price' , 'price_off' , 'user_id'];

    public function variety(){
        return $this->hasOne(Variety::class , 'id' , 'variety_id');
    }

    public function product(){
        return $this->hasOne(Product::class , 'id' , 'product_id');
    }
}
