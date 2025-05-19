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
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->unsignedBigInteger('cd_servico');
            $table->unsignedBigInteger('cd_usuario'); 
            $table->unsignedBigInteger('cd_instituicao'); 
            $table->timestamps();
    
            
            $table->foreign('cd_servico')
                  ->references('id')
                  ->on('servicos')
                  ->onDelete('cascade');

            $table->foreign('cd_usuario')
                  ->references('id')
                  ->on('usuarios')
                  ->onDelete('cascade');

            $table->foreign('cd_instituicao')
            ->references('id')
            ->on('instituicoes')
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
