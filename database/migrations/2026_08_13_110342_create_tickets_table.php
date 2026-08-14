<?php

use App\Enums\TicketCategory;
use App\Enums\TicketStatus;
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
        Schema::create('tickets', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid')->unique();
            $table->string('tracking_code')->unique();
            $table->string('title');
            $table->text('description');
            $table->string('category')->default(TicketCategory::E_GENERAL->value);
            $table->string('status')->default(TicketStatus::E_OPEN->value);
            $table->string('email');
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
