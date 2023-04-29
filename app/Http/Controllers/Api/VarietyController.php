<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variety;
use Illuminate\Http\Request;

class VarietyController extends Controller
{
    public function varieties(Request $request){

        $specialVarieties = Variety::query()
            ->with('product')
            ->with('categories')
            ->with('warranty')
            ->with('brand')
            ->with('user')
            ->with('type');
//            ->orderBy('type');
        if ($request['type'] === 'category'){
            $specialVarieties
            ->where('category_list' , 'like' , '%/'.$request['id'].'/%');

        }else {
            if ($request['query']['category']){
                foreach ($request['query']['category'] as $Item){
                    $specialVarieties
                        ->where('category_list' , 'like' , '%/'.$Item.'/%');
                }
            }
        }

        if ($request['type'] === 'brand'){
            $specialVarieties
                ->where('brand_id' , $request['id']);
        }else{
            if ($request['query']['brand']){
                $specialVarieties
                    ->whereIn('brand_id'  , $request['query']['brand']);
            }
        }

        if ($request['type'] === 'moreSell'){
            $specialVarieties
                ->where('moreSell'  , 1);
        }else{
            if ($request['query']['moreSell']){
                $specialVarieties
                    ->where('moreSell'  , 1);
            }
        }

        if ($request['type'] === 'special'){
            $specialVarieties
                ->where('special'  , 1);
        }else{
            if ($request['query']['special']){
                $specialVarieties
                    ->where('special'  , 1);
            }
        }

        if ($request['type'] === 'seller'){
            $specialVarieties
                ->where('user_id'  , $request['id']);
        }


            if ($request['query']['variety']){
                $specialVarieties
                    ->whereIn('variety'  , $request['query']['variety']);
            }
            if ($request['query']['shipping']){
                $specialVarieties
                    ->whereIn('shipping_time'  , $request['query']['shipping']);
            }


            if ($request['query']['minPrice'] && !$request['query']['maxPrice']){
                $specialVarieties
                    ->where('price_off' , '>='  , intval($request['query']['minPrice'][0]) * 10);
            }
            if ($request['query']['maxPrice'] && !$request['query']['minPrice']){
                $specialVarieties
                    ->where('price_off' , '<='  , intval($request['query']['maxPrice'][0]) * 10);
            }
            if ($request['query']['maxPrice'] && $request['query']['minPrice']){
                $specialVarieties
                    ->whereBetween('price_off' , [intval($request['query']['minPrice'][0]) * 10 , intval($request['query']['maxPrice'][0]) * 10] );
            }


            if ($request['query']['sort']){
                if ($request['query']['sort'][0] == 'new'){
                    $specialVarieties
                        ->orderBy('created_at' , 'desc');
                }else if ($request['query']['sort'][0] == 'expensive'){
                    $specialVarieties
                        ->orderBy('price_off');
                }else if ($request['query']['sort'][0] == 'inexpensive'){
                    $specialVarieties
                        ->orderBy('price_off' , 'desc');
                }
            }
            $specialVarieties = $specialVarieties->distinct()->paginate(12);

        return response()->json($specialVarieties);
    }
}
