<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::view('/{path?}/{path1?}/{path3?}', 'welcome');

Route::get('/', function () {
    return view('welcome');
});

//Route::resource('quizzes', \App\Http\Controllers\QuizController::class);

Auth::routes();
Route::get('/profile', 'ProfileController@index')->name('profile');

//Auth::routes();
//
//Route::get('/profile', 'ProfileController@index')->name('profile');
