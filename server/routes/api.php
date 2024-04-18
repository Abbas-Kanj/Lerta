<?php

use App\Http\Controllers\auth\AuthController;
use App\Http\Controllers\shelters\ShelterController;
use App\Http\Controllers\user\FamilyController;
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

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login'])->name('login');
Route::middleware('auth')->group(function () {
    Route::get('get_family_members', [FamilyController::class, 'index']);
    Route::get('get_dangerzones', [ShelterController::class, 'dangerzones']);
    Route::get('get_shelters', [ShelterController::class, 'index']);
    Route::get('get_nearset_shelters', [ShelterController::class, 'get_nearset_shelters']);
});
