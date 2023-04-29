<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use App\Models\homeView;
use App\Models\Product;
use App\Models\Variety;

class HomeViewController extends Controller
{
    public function homeView()
    {
        $homeView = homeView::all();
        return response()->json($homeView);
    }

    public function specialVariety()
    {
        $specialVariety = Variety::query()
            ->where('special', 1)
            ->with('product')
            ->orderByRaw('rand()')
            ->limit(20)
            ->get();
        return response()->json($specialVariety);
    }

    public function SpecialCategoryVarieties()
    {
        $category = homeView::query()->find(1);
        $SpecialCategoryVarieties = Variety::query()
            ->where('special', 1)
            ->where('category_list', 'like', '%/' . $category->category_id . '/%')
            ->with('product')
            ->orderByRaw('rand()')
            ->limit(10)
            ->get();
        return response()->json($SpecialCategoryVarieties);
    }

    public function moreSells()
    {
        $moreSell = Variety::query()
            ->where('moreSell', 1)
            ->with('product')
            ->orderByRaw('rand()')
            ->limit(24)
            ->get();
        return response()->json($moreSell);
    }

    public function productDetails(Product $product){
//        $Auth =
        $favorite = Favorite::query()->where('user_id' , auth()->check() ? auth()->user()->id : 0)->where('product_id' , $product->id)->get();
        $varieties = Variety::query()
            ->with('product')
            ->with('brand')
            ->with('type')
            ->orderBy('price_off')
            ->where('dkp' , $product->id)
            ->get();

        return response()->json([$varieties , $favorite]);
    }
}
