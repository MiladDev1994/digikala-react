<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;

class TypesController extends Controller
{
    public function index(){
        $types = Color::all();
        return response()->json($types);
    }
}
