<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\homeView;
use Illuminate\Http\Request;

class HomeViewController extends Controller
{
    public function index(){
        $homeView = homeView::all();
        return response()->json($homeView);
    }
}
