<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('formularios', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cd_usuario'); 
            $table->unsignedBigInteger('cd_instituicoes');
 $table->enum('status', ['pendente', 'aceito', 'rejeitado'])->default('pendente');            $table->timestamps();
    
            $table->foreign('cd_usuario')
                  ->references('id')
                  ->on('usuarios')
                  ->onDelete('cascade');

            $table->foreign('cd_instituicoes')
            ->references('id')
            ->on('Instituicoes')
            ->onDelete('cascade');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('formularios');
    }
};