<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('quiz', QuizController::class);

//for routing
Route::get('quiz/{quiz_id}/answer/{respondent_id}', [
    'uses'=> ResponseController::class.'@show',
    'as'=> 'quiz.answer'
]);

Route::get('/user/{user_id}/quiz', [
    'uses'=> QuizController::class.'@index',
    'as'=> 'quiz.list'
]);

Route::post('quiz/answer/', 'ResponseController@store');

Route::apiResource('quiz/{quiz_id}/answer', ResponseController::class);

Route::post('quiz/{quiz_id}/publish', 'QuizController@publish');


Route::group([
    'prefix' => 'auth'
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group([
        'middleware' => 'auth:api'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('me', 'AuthController@me');
    });
});
