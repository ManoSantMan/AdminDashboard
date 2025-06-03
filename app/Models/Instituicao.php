<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Instituicao extends Authenticatable
{
    protected $table = 'Instituicoes'; // nome correto da tabela no plural

    protected $fillable = [
        'nm_instituicao',
        'email',
        'password',
        'cep',
        'rua',
        'numero',
        'bairro',
        'cidade',
        'telefone',
        'descricao',
        'cnpj',
        'imagem',
        'status',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
