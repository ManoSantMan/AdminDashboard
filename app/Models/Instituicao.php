<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Instituicoes extends Model
{
    protected $table = 'Instituicoes';

    protected $fillable = [
        'nm_instituicao',
        'email_instituicao',
        'senha',
        'descricao',
        'endereco_instituicao',
        'telefone',
        'imagem',
    ];
         public function setSenhaAttribute($value)
    {
        $this->attributes['senha'] = Hash::make($value);
    }
} 