<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;

class FavoriteController extends Controller
{
    public function favorite_index(){
        $favorite = Favorite::query()->where('user_id' , auth()->user()->id)->with('product')->with('variety')->get();
        return response()->json($favorite);
    }
}
