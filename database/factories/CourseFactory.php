<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => 'Bsc Psychology',
            'text' => 'Bsc Psychology',
            'description' => '',
            'duration' => 4,
            'image' => '',
            'eligibility' => '+2 or Equivalent Course',
            'link' => '/',
            'slug' => 'BscPsychology',
            'specializations' => [
                "Finance & Taxations",
                "Marketing",
                "Logistics & Management",
                "Accounting",
            ],
        ];
    }
}
