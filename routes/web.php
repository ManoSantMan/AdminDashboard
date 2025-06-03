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

// Login admin (corrigido)
Route::get('/login/admin', [AuthController::class, 'indexAdmin'])->name('login');
Route::post('/login/admin', [AuthController::class, 'loginAdmin'])->name('auth.admin');


// Dashboard Admin (corrigido)

    Route::get('/admin/dashboard', fn() => Inertia::render('AdminDashboard'))->name('admin.dashboard');



// Login instituição
Route::get('/login/instituicao', [AuthController::class, 'indexInstituicao'])->name('login.instituicao');
Route::post('/login/instituicao', [AuthController::class, 'loginInstituicao'])->name('auth.instituicao');