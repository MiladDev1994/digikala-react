<?php

use App\Http\Controllers\Api\ArticleController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\BrandController;
use App\Http\Controllers\Api\categoryController;
use App\Http\Controllers\Api\DateController;
use App\Http\Controllers\Api\FavoriteController;
use App\Http\Controllers\Api\HomeViewController;
use App\Http\Controllers\Api\OrderController;
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
Route::apiResource('order' , OrderController::class);
Route::apiResource('date' , DateController::class);

Route::get('loginedIn' , [AuthController::class , 'loginedIn']);
Route::post('register' , [AuthController::class , 'register']);
Route::post('login' , [AuthController::class , 'login']);
Route::post('logOut' , [AuthController::class , 'logOut']);
Route::get('getApi' , [HomeViewController::class , 'getApi']);
Route::post('varieties' , [VarietyController::class , 'varieties']);
Route::get('product/{product}' , [HomeViewController::class , 'productDetails']);
Route::post('favorite' , [HomeViewController::class , 'favorite']);
Route::get('favorite/index' , [FavoriteController::class , 'favorite_index']);
Route::get('category/{category}' , [HomeViewController::class , 'category']);
Route::get('comments/{product}' , [HomeViewController::class , 'comments']);
Route::post('comment/store' , [HomeViewController::class , 'comment_store']);
Route::post('basket/insert' , [HomeViewController::class , 'basket_insert']);
Route::get('basket/index' , [HomeViewController::class , 'basket_index']);
Route::get('comment/index' , [HomeViewController::class , 'comment_index']);
