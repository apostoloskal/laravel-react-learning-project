<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Ticket\TicketController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'home')->name('home');

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');


Route::resource('ticket', TicketController::class)->only(['create', 'store', 'show'])
->name('create', 'ticket.create')
->name('store', 'ticket.store')
->name('show', 'ticket.show');