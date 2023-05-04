<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Variety;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index(){
        $order = Order::query()->where('buyer_id' , auth()->user()->id)->with('variety' , 'product' , 'type')->get();
        return response()->json($order);
    }

    public function update(Order $order){
//        Order::destroy($order->id);
        Order::query()->where('id' , $order->id)->update(['order_status'=>'canceled']);
        Variety::query()->where('id' , $order->variety_id)->decrement('reserve_num' , $order->number);
        Variety::query()->where('id' , $order->variety_id)->increment('remain' , $order->number);

        $order = Order::query()->where('buyer_id' , auth()->user()->id)->with('variety' , 'product' , 'type')->get();
        return response()->json($order);
    }
}
