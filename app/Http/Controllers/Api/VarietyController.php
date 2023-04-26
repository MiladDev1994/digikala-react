<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variety;
use Illuminate\Http\Request;

class VarietyController extends Controller
{
    public function varieties(Request $request){
        if ($request['type'] === 'category'){

        }
//        dd($request['type']);
        $specialVarieties = Variety::query()
            ->with('product')
            ->with('categories')
            ->with('warranty')
            ->with('brand')
            ->with('user')
            ->with('type')
            ->where('category_list' , 'like' , '%/'.$request['id'].'/%');
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
            if ($request['query']['moreSell']){
                $specialVarieties
                    ->where('moreSell'  , 1);
            }
            if ($request['query']['special']){
                $specialVarieties
                    ->where('special'  , 1);
            }

//            foreach ($request['query']['category'] as $Item){
//                $specialVarieties
//                    ->where('category_list' , 'like' , '%/'.$Item.'/%');
//            }
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
            $specialVarieties = $specialVarieties->distinct()->paginate(12);

        return response()->json($specialVarieties);
    }
}
