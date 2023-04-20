<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function loginedIn(){
        $Auth = auth()->check();
        return response()->json($Auth);
    }
}
