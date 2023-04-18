<?php

use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\categoryController;
use App\Http\Controllers\Api\HomeViewController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\VarietyController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::apiResource('homeView' , HomeViewController::class);
Route::apiResource('category' , categoryController::class);
Route::apiResource('carousel' , SliderController::class);
Route::apiResource('varieties' , VarietyController::class);
Route::apiResource('brands' , BrandController::class);
Route::apiResource('articles' , ArticleController::class);
