<?php

namespace App\Http\Controllers;

use App\Models\Instituicoes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class InstituicoesController extends Controller
{
    /**
     * funcionando
     */
    public function index()
    {
        $regInstituicoes = instituicoes::All();
        $contador = $regInstituicoes->count();
        return Response()->json($regInstituicoes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nm_instituicao' => 'required',
            'email_instituicao' => 'required',
            'senha' => 'required',
            'cnpj' => 'required',
            'cep' => 'required',
            'rua' => 'required',
            'numero' => 'required',
            'bairro' => 'required',
            'cidade' => 'required',
            'telefone' => 'required',
            'descricao' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'registros inválidos',
                'errors' => $validator->errors()
            ], 400);
        }

        $registros = instituicoes::create($request->all());

        if ($registros) {
            return response()->json([
                'success' => true,
                'message' => 'instituição cadastrada com sucesso',
                'data' => $registros
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
     return instituicoes::with('formularios.usuarios')->findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'nm_instituicao' => 'required',
            'email_instituicao' => 'required',
            'senha' => 'required',
            'cnpj' => 'required',
            'cep' => 'required',
            'rua' => 'required',
            'numero' => 'required',
            'bairro' => 'required',
            'cidade' => 'required',
            'telefone' => 'required',
            'descricao' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'registros inválidos',
                'errors' => $validator->errors()
            ], 400);
        }

        $regInstituicoesBanco = instituicoes::find($id);

        if (!$regInstituicoesBanco) {
            return response()->json([
                'success' => false,
                'message' => 'instituição não encontrada'
            ], 404);
        }

        $regInstituicoesBanco->nm_instituicao = $request->nm_instituicao;
        $regInstituicoesBanco->email_instituicao = $request->email_instituicao;
        $regInstituicoesBanco->senha = $request->senha;
        $regInstituicoesBanco->cnpj = $request->cnpj;
        $regInstituicoesBanco->cep = $request->cep;
        $regInstituicoesBanco->rua = $request->rua;
        $regInstituicoesBanco->numero = $request->numero;
        $regInstituicoesBanco->bairro = $request->bairro;
        $regInstituicoesBanco->cidade = $request->cidade;
        $regInstituicoesBanco->telefone = $request->telefone;
        $regInstituicoesBanco->descricao = $request->descricao;
        $regInstituicoesBanco->imagem = $request->imagem;

        if ($regInstituicoesBanco->save()) {
            return response()->json([
                'success' => true,
                'message' => 'instituição atualizada com sucesso',
                'data' => $regInstituicoesBanco
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Falha ao atualizar instituição'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $regInstituicoes = instituicoes::find($id);
        if (!$regInstituicoes) {
            return response()->json([
                'success' => false,
                'message' => 'instituição não encontrada'
            ], 404);
        }

        if ($regInstituicoes->delete()) {
            return response()->json([
                'success' => true,
                'message' => 'instituição excluída com sucesso'
            ], 200);
        }
    }
}