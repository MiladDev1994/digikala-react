<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Basket;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Favorite;
use App\Models\homeView;
use App\Models\Product;
use App\Models\Variety;
use Hekmatinasser\Verta\Verta;
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

    public function comments(Product $product){

        $comments = Comment::query()->where('product_id' , $product->id)->with('orders')->with('user')->get();
//        dd($comments);
        return response()->json($comments);
    }

    public function comment_store(Request $request){
        $request->validate([
            'score'=>'required',
            'about'=>'required',
            'proposal'=>'required',
            'title'=>'required',
        ]);

        if($request->proposal === 'ok'){
            $proposal = 1 ;
        }else{
            $proposal = 0 ;
        }

        Comment::create([
            'product_id'=>$request->product,
            'user_id'=>auth()->user()->id,
            'text'=>$request->about,
            'titr'=>$request->title,
            'proposal'=>$proposal,
            'active'=>0,
            'score'=>$request->score,
            'solar_date'=>Verta::now('iran'),
        ]);
    }

    public function basket_insert(Request $request){
        $request->validate([
            'variety_id'=>'required',
            'product_id'=>'required',
            'quantity'=>'required',
            'price'=>'required',
            'price_off'=>'required',
        ]);

        if ($request->action === 'ADD'){
            Basket::create([
                'variety_id'=>$request->variety_id,
                'product_id'=>$request->product_id,
                'quantity'=>$request->quantity,
                'price'=>$request->price,
                'price_off'=>$request->price_off,
                'user_id'=>auth()->user()->id,
            ]);
        } elseif ($request->action === 'INCREASE'){
            Basket::where('user_id' , auth()->user()->id)->where('variety_id' , $request->variety_id)->increment('quantity' , 1);
        }elseif ($request->action === 'DECREASE'){
            Basket::where('user_id' , auth()->user()->id)->where('variety_id' , $request->variety_id)->decrement('quantity' , 1);
        } elseif ($request->action === 'REMOVE'){
            Basket::where('user_id' , auth()->user()->id)->where('variety_id' , $request->variety_id)->delete();
        }

        $basket = Basket::query()->where('user_id' , auth()->user()->id)->with('product')->with('variety')->get();
        return response()->json($basket);
    }


    public function basket_index(){
        $basket = Basket::query()->where('user_id' , auth()->user()->id)->with('product')->with('variety')->get();
        return response()->json($basket);
    }
}
