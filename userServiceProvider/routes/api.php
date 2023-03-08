<?php

use App\Http\Controllers\SurfSessionController;
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

Route::get('/surfSessions/{id}', [SurfSessionController::class, 'show']);
Route::get('/surfSessions', [SurfSessionController::class, 'index']);
Route::post('/surfSessions', [SurfSessionController::class, 'store']);
Route::patch('/surfSessions/{surfSession}', [SurfSessionController::class, 'update']);
Route::delete('/surfSessions/{surfSession}', [SurfSessionController::class, 'destroy']);


