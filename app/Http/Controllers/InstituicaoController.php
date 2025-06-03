<?php


namespace App\Http\Controllers;

use App\Models\Instituicao;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule; 

class InstituicaoController extends Controller
{
    public function index()
    {
        $regInstituicao = Instituicao::all();
        return response()->json($regInstituicao);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nm_instituicao' => 'required|string|max:255',
            'email' => 'required|email|unique:instituicoes,email',
            'password' => 'required|min:6',
            'cnpj' => 'nullable|string',
            'cep' => 'required',
            'rua' => 'required',
            'numero' => 'required',
            'bairro' => 'required',
            'cidade' => 'required',
            'telefone' => 'required',
            'descricao' => 'required',
            'imagem' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Registros inválidos',
                'errors' => $validator->errors()
            ], 400);
        }

        $registro = Instituicao::create([
            'nm_instituicao' => $request->nm_instituicao,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'cnpj' => $request->cnpj,
            'cep' => $request->cep,
            'rua' => $request->rua,
            'numero' => $request->numero,
            'bairro' => $request->bairro,
            'cidade' => $request->cidade,
            'telefone' => $request->telefone,
            'descricao' => $request->descricao,
            'imagem' => $request->imagem,
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Instituição cadastrada com sucesso',
            'data' => $registro
        ], 201);
    }

    public function show($id)
    {
        $instituicao = Instituicao::findOrFail($id);
        return response()->json($instituicao);
    }

    public function update(Request $request, $id)
    {
        $instituicao = Instituicao::findOrFail($id);

        $validator = Validator::make($request->all(), [
            'status' => ['required', Rule::in(['pendente', 'aceito', 'rejeitado'])],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Registros inválidos',
                'errors' => $validator->errors()
            ], 400);
        }

        $instituicao->status = $request->status;
        $instituicao->save();

        return response()->json([
            'success' => true,
            'message' => 'Status atualizado com sucesso',
            'data' => $instituicao
        ]);
    }

    public function destroy($id)
    {
        $instituicao = Instituicao::findOrFail($id);
        $instituicao->delete();

        return response()->json([
            'success' => true,
            'message' => 'Instituição excluída com sucesso'
        ]);
    }
}