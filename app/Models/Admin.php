<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;

class Admin extends Model
{
    protected $table = 'Admins';

    protected $fillable = [
        'NM_admin',
        'email',
        'password',
    ];

    /**
     * Criptografa a password automaticamente ao salvar.
     */
    public function setpasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
}