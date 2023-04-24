<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variety;
use Illuminate\Http\Request;

class VarietyController extends Controller
{
    public function varieties(Request $request){
//        dd($request['query']['brand'][0]);
        $specialVarieties = Variety::query()
            ->with('product')
            ->with('categories')
            ->with('warranty')
            ->with('brand')
            ->with('user');
            if ($request['query']['brand']){
                $specialVarieties
                    ->whereIn('brand_id'  , $request['query']['brand']);
            }
            if ($request['query']['variety']){
                $specialVarieties
                    ->whereIn('variety'  , $request['query']['variety']);
            }
            if ($request['query']['shipping']){
                $specialVarieties
                    ->whereIn('shipping_time'  , $request['query']['shipping']);
            }

            foreach ($request['query']['category'] as $Item){
                $specialVarieties
                    ->where('category_list' , 'like' , '%/'.$Item.'/%');
            }
            if ($request['query']['sort']){
                if ($request['query']['sort'][0] == 'new'){
                    $specialVarieties
                        ->orderBy('created_at' , 'desc');
                }else if ($request['query']['sort'][0] == 'expensive'){
                    $specialVarieties
                        ->orderBy('price_off' , 'desc');
                }else if ($request['query']['sort'][0] == 'Inexpensive'){
                    $specialVarieties
                        ->orderBy('price_off');
                }
            }
            $specialVarieties = $specialVarieties->distinct()->get();

        return response()->json($specialVarieties);
    }
}
