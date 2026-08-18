<?php

namespace App\Http\Controllers\Ticket;

use App\Http\Controllers\Controller;
use App\Http\Requests\Ticket\TrackTicketRequest;
use App\Models\Ticket;

class TrackTicketController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(TrackTicketRequest $request)
    {
        $validated = $request->validated();

        $ticket = Ticket::query()
        ->where('tracking_code', '=', $validated['tracking_code'], 'and')
        ->where('email', '=', $validated['email'], 'and')
        ->first();

        if (! $ticket) {
            return back()
            ->withErrors(['message' => 'Could not find ticket with these credentials.']);
        }

        return inertia('home');
    }
}
