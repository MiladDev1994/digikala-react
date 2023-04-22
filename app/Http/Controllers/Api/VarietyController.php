<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variety;
use Illuminate\Http\Request;

class VarietyController extends Controller
{
    public function varieties(Request $request){
//        dd($request['query']);
        $specialVarieties = Variety::query()
            ->with('product')
            ->with('categories')
            ->with('warranty')
            ->with('brand')
            ->with('user')
            ->where('category_list' , 'like' , '%'.$request['query']['category'][0].'%')
            ->where('brand_id'  , $request['query']['brand'][0])
            ->get();
        return response()->json($specialVarieties);
    }
}
