
<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FormularioController;
use App\Http\Controllers\InstituicoesController;
use App\Http\Controllers\UsuariosController;

//quando alguém acessar GET /user, o método index do InstituicoesController será chamado.



// Rota protegida que retorna o usuário autenticado (exemplo)
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::options('/{any}', function () {
    return response()->json([], 204);
})->where('any', '.*');

// Rotas Admin protegidas por JWT
Route::middleware('auth:api')->group(function () {
    Route::post('/admin',[AdminController::class, 'store']);
    Route::put('/admin/{id}',[AdminController::class,'update']);
    Route::delete('/admin/{id}',[AdminController::class,'destroy']);
    Route::get('/admin',[AdminController::class,'index']);
    Route::get('/admin/{id}',[AdminController::class,'show']);
});

// Rotas Formulario protegidas (exemplo)
Route::middleware('auth:api')->group(function () {
    Route::post('/formularios', [FormularioController::class, 'store']);
    Route::patch('/formularios/{formulario}/status', [FormularioController::class, 'atualizarStatus'])->name('formularios.status');
    Route::get('/instituicoes/{id}/formularios', [FormularioController::class, 'listarPorInstituicao'])->name('instituicoes.formularios');
});

// Rotas Instituicoes protegidas
Route::middleware('auth:api')->group(function () {
    Route::post('/instituicoes',[InstituicoesController::class, 'store']);
    Route::put('/instituicoes/{id}',[InstituicoesController::class, 'update']);
    Route::delete('/instituicoes/{id}',[InstituicoesController::class, 'destroy']);
    Route::get('/instituicoes',[InstituicoesController::class, 'index']);
    Route::get('/instituicoes/{id}',[InstituicoesController::class, 'show']);
});

// Rotas Usuarios protegidas
Route::middleware('auth:api')->group(function () {
    Route::post('/usuarios',[UsuariosController::class, 'store']);
    Route::put('/usuarios/{id}',[UsuariosController::class, 'update']);
    Route::delete('/usuarios/{id}',[UsuariosController::class, 'destroy']);
    Route::get('/usuarios',[UsuariosController::class, 'index']);
    Route::get('/usuarios/{id}',[UsuariosController::class, 'show']);
});

