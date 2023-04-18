<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Variety;
use Illuminate\Http\Request;

class VarietyController extends Controller
{
    public function index(){
        $specialVarieties = Variety::query()
            ->with('product')
            ->with('categories')
            ->with('warranty')
            ->with('brand')
            ->with('user')
            ->get();
        return response()->json($specialVarieties);
    }
}
