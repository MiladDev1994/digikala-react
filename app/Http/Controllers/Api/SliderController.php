<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\homeView;
use App\Models\Slider;
use App\Models\Variety;
use Illuminate\Http\Request;
use Illuminate\Tests\Integration\Queue\Product;

class SliderController extends Controller
{
    public function index(){
        $carousel = Slider::all();
        $specialVarieties = Variety::query()->where('special' , 1)->with('product')->orderByRaw('rand()')->limit(20)->get();
        $homeView = homeView::query()->find(1);
        return response()->json([$carousel , $specialVarieties , $homeView]);
    }
}
