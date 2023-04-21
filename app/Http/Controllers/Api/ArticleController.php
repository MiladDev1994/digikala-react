<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    public function index(){
        $Articles = Article::query()->with('product')->with('variety')->get();
        return response()->json($Articles);
    }
}
