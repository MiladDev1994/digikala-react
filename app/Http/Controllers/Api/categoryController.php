<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class categoryController extends Controller
{
    public function index(){
        $categories = Category::query()->with('Child')->get();

        return response()->json($categories);
    }
}
