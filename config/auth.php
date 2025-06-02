<?php

return [

    'defaults' => [
        'guard' => 'web',
        'passwords' => 'usuarios',
    ],

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'usuarios',
        ],

        'admin' => [
            'driver' => 'session',
            'provider' => 'admins',
        ],

        'instituicao' => [
            'driver' => 'session',
            'provider' => 'instituicoes',
        ],

        'api' => [
            'driver' => 'token',
            'provider' => 'usuarios',
            'hash' => false,
        ],

        'api-admin' => [
            'driver' => 'token',
            'provider' => 'admins',
            'hash' => false,
        ],

        'api-instituicao' => [
            'driver' => 'token',
            'provider' => 'instituicoes',
            'hash' => false,
        ],
    ],

    'providers' => [
        'usuarios' => [
            'driver' => 'eloquent',
            'model' => App\Models\Usuarios::class,
        ],

        'admins' => [
            'driver' => 'eloquent',
            'model' => App\Models\Admin::class,
        ],

        'instituicoes' => [
            'driver' => 'eloquent',
            'model' => App\Models\Instituicao::class,
        ],
    ],

    'passwords' => [
        'usuarios' => [
            'provider' => 'usuarios',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'admins' => [
            'provider' => 'admins',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],

        'instituicoes' => [ // <- mantido como está
            'provider' => 'instituicoes',
            'table' => 'password_resets',
            'expire' => 60,
            'throttle' => 60,
        ],
    ],

    'password_timeout' => env('AUTH_PASSWORD_TIMEOUT', 10800),
];
