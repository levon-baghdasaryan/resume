<?php

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

//Route::get('/', function () {
//    return view('welcome');
//});
//Route::get('/', function () {
//    return view('pages.index');
//});

//Public routes
Route::get('/', 'PageController@home')->name('home');
Route::get('cover-letter', 'PageController@coverLetter')->name('cover-letter');
Route::get('jobs', 'PageController@jobs')->name('jobs');
Route::get('contact', 'PageController@contact')->name('contact');

//Authentication routes
Auth::routes();
Route::get('register', 'Auth\LoginController@showLoginForm')->name('register');
Route::get('logout', 'Auth\LoginController@logout');

//Private routes
Route::group(['middleware' => ['auth']], function () {
    Route::get('choose-template', 'CredentialController@getTemplates')->name('templates');
    Route::post('choose-template', 'CredentialController@chooseTemplate')->name('choose-template');
    Route::get('create-resume', 'CredentialController@createResume')->name('create-resume');
    Route::get('header', 'CredentialController@header')->name('header');
    Route::post('header', 'CredentialController@storeHeader')->name('header.store');
    Route::get('experience', 'ExperienceController@index')->name('experience.index');
    Route::post('experience', 'ExperienceController@store')->name('experience.store');
    Route::get('experience/create', 'ExperienceController@create')->name('experience.create');
    Route::get('education', 'CredentialController@education')->name('education');
    Route::get('review-education', 'CredentialController@reviewEducation')->name('review-education');
    Route::get('skills', 'CredentialController@skills')->name('skills');
    Route::get('summary', 'CredentialController@summary')->name('summary');
    Route::get('finalize', 'CredentialController@finalize')->name('finalize');
});



//Route::get('/home', 'HomeController@index')->name('home');
