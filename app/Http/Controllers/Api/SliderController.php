<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\homeView;
use App\Models\Slider;
use App\Models\Variety;
use Illuminate\Http\Request;
use Illuminate\Tests\Integration\Queue\Product;

class SliderController extends Controller
{
    public function index(){
        $carousel = Slider::all();
//        $specialVarieties = Variety::query()->where('special' , 1)->with('product')->orderByRaw('rand()')->limit(20)->get();

//        $homeView = homeView::query()->find(1);
//        $homeViewB = Categories::query()->with('products')->find($homeView->category_id);
//        $CategoryProductId = [];
//        foreach ($homeViewB->products as $item){
//            array_push($CategoryProductId , $item->dkp);
//        }
//        $categoryVarietiesSpecial = Variety::query()
//            ->where('special' , 1)
//            ->with('product')
//            ->whereIn('dkp' , $CategoryProductId)
//            ->orderByRaw('rand()')
//            ->limit(10)->get();

        return response()->json($carousel);
    }
}
