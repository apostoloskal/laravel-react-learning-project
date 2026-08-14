<?php

namespace Database\Factories;

use App\Enums\TicketCategory;
use App\Enums\TicketStatus;
use App\Models\Ticket;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'tracking_code' => 'TKT-' . fake()->unique()->numberBetween(100000, 999999),
            'title' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'category' => $this->faker->randomElement(TicketCategory::cases()),
            'status' => $this->faker->randomElement(TicketStatus::cases()),
            'email' => $this->faker->unique()->safeEmail(),
        ];
    }
}
