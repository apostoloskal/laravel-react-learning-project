<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Override;

class Ticket extends Model
{
    /** @use HasFactory<\Database\Factories\TicketFactory> */
    use HasFactory, HasUuids;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'description',
        'category',
        'status',
        'email',
        'user_id',
    ];

    protected static function booted(): void
    {
        static::creating(function (Ticket $ticket) {
            if (empty($ticket->tracking_code)) {
                $ticket->tracking_code = $ticket->generateTrackingCode();
            }
        });
    }

    private function generateTrackingCode(): string
    {
        do {
            $code = 'TKT-' . random_int(100000, 999999);
        } while ($this->newQuery()->where('tracking_code', '=', $code)->exists());

        return $code;
    }

    public function assignedEmployee()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function uniqueIds(): array 
    {
        return ['uuid'];
    }

    #[Override]
    public function getRouteKeyName(): string
    {
        return 'uuid';
    }
}
