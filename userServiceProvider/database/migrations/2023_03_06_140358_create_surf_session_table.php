<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('surf_session', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->timestamps();
            $table->foreignId('user_id')->constrained();
            $table->dateTime('dateTime');
            $table->string('country');
            $table->string('spot');
            $table->integer('rating');
            $table->json('conditions')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('surf_session');
    }
};
