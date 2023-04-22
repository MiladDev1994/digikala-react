<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\homeView;
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
            ->where('category_list', 'like', '%' . $category->category_id . '%')
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
}
