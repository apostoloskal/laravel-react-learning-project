<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Ticket\TicketController;
use App\Http\Controllers\Ticket\TrackTicketController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => to_route('ticket.create', [], 301))->name('home');

Route::prefix('/ticket/track')->group(function () {
    Route::inertia('/', 'ticket/track')->name('ticket.track');
    Route::post('/', TrackTicketController::class);
});

Route::resource('ticket', TicketController::class)->only(['create', 'store', 'show'])
->name('create', 'ticket.create')
->name('store', 'ticket.store')
->name('show', 'ticket.show');

Route::get('/login', [LoginController::class, 'create'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('login.store');
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');