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
        Schema::create('events', function (Blueprint $table) {
            $table->id(); // Primary key, auto-increment
            $table->string('title', 256)->unique(); // Title with unique index
            $table->string('description', 500)->nullable(); // Description, nullable
            $table->date('date')->nullable(); // Date of the event, nullable
            $table->json('images')->nullable(); // JSON field for images
            $table->enum('event_type', [
                'Upcoming Event',
                'Announcement',
                'Events',
                'NSS Event',
            ])->nullable(); // Enum for event type
            $table->string('link', 256)->nullable(); // Link, nullable
            $table->timestamps(); // Created_at and Updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
