<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;

class Instituicao extends Authenticatable
{
    protected $table = 'instituicoes'; // nome correto da tabela no plural

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
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
}
