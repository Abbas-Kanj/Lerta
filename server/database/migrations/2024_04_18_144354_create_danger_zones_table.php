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
        Schema::create('danger_zones', function (Blueprint $table) {
            $table->id();
            $table->float('lat');
            $table->float('lng');
            $table->float('radius');
            $table->enum('type', ['Earthquake', 'Volcano', 'Tsunami']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('danger_zones');
    }
};
