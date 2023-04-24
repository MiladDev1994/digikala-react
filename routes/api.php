<?php

use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\categoryController;
use App\Http\Controllers\Api\HomeViewController;
use App\Http\Controllers\Api\SliderController;
use App\Http\Controllers\Api\TypesController;
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


Route::get('homeView' , [HomeViewController::class , 'homeView']);
Route::get('specialVariety' , [HomeViewController::class , 'specialVariety']);
Route::get('SpecialCategoryVarieties' , [HomeViewController::class , 'SpecialCategoryVarieties']);
Route::get('moreSell' , [HomeViewController::class , 'moreSells']);

Route::apiResource('category' , categoryController::class);
Route::apiResource('carousel' , SliderController::class);
Route::apiResource('brands' , BrandController::class);
Route::apiResource('articles' , ArticleController::class);
Route::apiResource('types' , TypesController::class);

Route::get('loginedIn' , [AuthController::class , 'loginedIn']);
Route::post('register' , [AuthController::class , 'register']);
Route::post('login' , [AuthController::class , 'login']);
Route::post('logOut' , [AuthController::class , 'logOut']);
Route::get('getApi' , [HomeViewController::class , 'getApi']);
Route::post('varieties' , [VarietyController::class , 'varieties']);
