<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['product_id' , 'user_id' , 'text' , 'proposal' , 'active' , 'score' , 'titr' , 'solar_date'];
    public function orders(){
        return $this->hasMany(Order::class , 'buyer_id' , 'user_id');
    }

    public function user(){
        return $this->hasOne(User::class , 'id' , 'user_id');
    }
}
