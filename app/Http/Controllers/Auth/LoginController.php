<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class LoginController extends Controller
{

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response|RedirectResponse
    {
        if (Auth::check()) {
            return redirect()->route('home');
        }

        return inertia('auth/login');
    }

    /**
     * Update the specified resource in storage.
     */
    public function store(Request $request): Response|RedirectResponse
    {
        $credentials = $request->validate([
            'username' => ['required', 'string', 'max:20'],
            'password' => ['required', 'string', 'max:20'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended(route('home'));
        }

        return back()->withErrors([
            'message' => 'The provided credentials do not match our records.',
        ]);
    }
    

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {
        //
    }
}
