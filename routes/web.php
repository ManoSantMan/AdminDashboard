<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Páginas públicas (middleware 'web' por padrão)
Route::get('/', fn() => Inertia::render('Welcome'));
Route::get('/CadastroVoluntario', fn() => Inertia::render('User/CadastroVoluntario'));
Route::get('/CadastroInstituicao', fn() => Inertia::render('Ong/CadastroInstituicao'));
Route::get('/admin', fn() => Inertia::render('Admin'));

// Login voluntário
Route::get('/login/voluntario', [AuthController::class, 'indexUsuario'])->name('LoginVoluntario');
Route::post('/login/voluntario', [AuthController::class, 'loginUsuario'])->name('auth.voluntario');

// Login admin
Route::get('/login/admin', [AuthController::class, 'indexAdmin'])->name('login.admin');
Route::post('/login/admin', [AuthController::class, 'loginAdmin'])->name('auth.admin');

// Login instituição
Route::get('/login/instituicao', [AuthController::class, 'indexInstituicao'])->name('login.instituicao');
Route::post('/login/instituicao', [AuthController::class, 'loginInstituicao'])->name('auth.instituicao');

// Logout genérico
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Rotas protegidas por autenticação, garantindo uso do middleware 'web' + 'auth'
Route::middleware(['web', 'auth:web'])->group(function () {
    Route::get('/dashboard', fn() => 'Dashboard Voluntário')->name('dashboard');
});

Route::middleware(['web', 'auth:admin'])->group(function () {
    Route::get('/admin/dashboard', fn() => 'Dashboard Admin')->name('admin.dashboard');
});

Route::middleware(['web', 'auth:instituicao'])->group(function () {
    Route::get('/instituicao/dashboard', fn() => 'Dashboard Instituição')->name('instituicao.dashboard');
});

// Perfil protegido (todas as autenticações)
Route::middleware('web')->get('/perfil', function () {
    if (Auth::guard('web')->check()) {
        $user = Auth::guard('web')->user();
        $tipo = 'usuario';
    } elseif (Auth::guard('instituicao')->check()) {
        $user = Auth::guard('instituicao')->user();
        $tipo = 'instituicao';
    } elseif (Auth::guard('admin')->check()) {
        $user = Auth::guard('admin')->user();
        $tipo = 'admin';
    } else {
        return redirect('/')->with('error', 'Acesso não autorizado.');
    }

    return Inertia::render('Conta', [
        'user' => [
            'nome' => $user->nome ?? $user->nm_instituicao ?? $user->name ?? 'Nome não encontrado',
            'email' => $user->email ?? 'Email não encontrado',
            'tipo' => $tipo,
        ]
    ]);
})->name('perfil');

