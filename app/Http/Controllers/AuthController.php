<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function indexUsuario()
    {
        return Inertia::render('User/LoginVoluntario');
    }

    public function indexAdmin()
    {
        return Inertia::render('Admin');
    }

    public function indexInstituicao()
    {
        return Inertia::render('ONG/LoginIniciativa');
    }

    // ✅ Login do VOLUNTÁRIO (usuário comum)
    public function loginUsuario(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('web')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect('/dashboard');
        }

        return back()->withErrors(['password' => 'Credenciais inválidas'])->withInput();
    }

    // ✅ Login do ADMIN
    public function loginAdmin(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('admin')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('admin.dashboard');
        }

        return back()->withErrors(['password' => 'Credenciais inválidas'])->withInput();
    }

    // ✅ Login da INSTITUIÇÃO
    public function loginInstituicao(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::guard('instituicao')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('perfil');
        }

        return back()->withErrors(['password' => 'Credenciais inválidas'])->withInput();
    }

    // ✅ Logout
    public function logout(Request $request)
    {
        if (Auth::guard('admin')->check()) {
            Auth::guard('admin')->logout();
        } elseif (Auth::guard('instituicao')->check()) {
            Auth::guard('instituicao')->logout();
        } else {
            Auth::guard('web')->logout();
        }

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/');
    }
}
