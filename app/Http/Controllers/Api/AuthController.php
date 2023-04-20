<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginedIn(){
        if (auth()->check()){
            return response()->json([auth()->user()]);
        }else{
            return response()->json([]);
        }
    }

    public function register(Request $request){
        $request->validate([
            'userName' => 'required|min:4',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:9',
        ]);

        User::create([
            'name' => $request->userName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'active' => 0,
            'isSeller' => 0,
            'roll' => 'normal',
        ]);

        $Login = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        Auth::attempt($Login);

        return response()->json([auth()->user()]);
    }


    public function login(Request $request){
        $credrtails = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (Auth::attempt($credrtails)){
            return response()->json([auth()->user()]);
        }else{
            return response()->json([]);
        }

    }

    public function logOut(Request $request){
        if ($request->logOut) Auth::logout();
        return response()->json([]);
    }
}
