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
        Schema::create('courses', function (Blueprint $table) {
            $table->id(); // Primary key
            $table->string('title'); // Title of the course
            $table->text('text'); // Short text for the course
            $table->text('description')->nullable(); // Detailed description, nullable
            $table->integer('duration'); // Duration of the course in years
            $table->string('image')->nullable(); // Path to course image, nullable
            $table->string('eligibility'); // Eligibility criteria
            $table->string('link'); // URL link to course details
            $table->string('slug')->unique(); // Unique slug for the course
            $table->json('specializations')->nullable(); // JSON column for specializations
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
