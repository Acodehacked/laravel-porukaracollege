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
        Schema::create('admissions', function (Blueprint $table) {
            $table->id(); // Primary key, auto-increment
            $table->string('student_name', 256); // Student name
            $table->string('mobile', 100)->unique(); // Mobile with unique index
            $table->string('email', 150)->unique(); // Email with unique index
            $table->string('address', 3250); // Address
            $table->string('applied_course', 1250); // Applied course
            $table->timestamp('submitted_at')->useCurrent(); // Timestamp for submission
            $table->timestamps(); // Created_at and Updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('admissions');
    }
};
