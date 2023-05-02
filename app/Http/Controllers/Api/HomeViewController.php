<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Favorite;
use App\Models\homeView;
use App\Models\Product;
use App\Models\Variety;
use Illuminate\Http\Request;
use function Webmozart\Assert\Tests\StaticAnalysis\false;

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
            ->with('user')
            ->with('warranty')
            ->orderBy('price_off')
            ->where('dkp' , $product->id)
            ->where('active' , 1)
            ->where('remain' , '>' , 0)
            ->get();

        return response()->json([$varieties , $favorite]);
    }

    public function favorite(Request $request){
        if ($request->status === false){
            $favorite = Favorite::query()->where('user_id' , auth()->user()->id)->where('product_id' , $request->product)->get();
            Favorite::destroy($favorite[0]->id);
        }else{
            Favorite::create([
                'user_id'=>auth()->user()->id,
                'product_id'=>$request->product,
            ]);
        }
        $favorite = Favorite::query()->where('user_id' , auth()->check() ? auth()->user()->id : 0)->where('product_id' , $request->product)->get();
        return response()->json($favorite);
    }



    public function category(Category $category){
        $Variety = Variety::query()->where('category_list' , 'like' , '%/'.$category->id.'/%')->with('product')->get();
        return response()->json($Variety);
    }
}
