<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class surfSession extends Model
{
    use HasFactory;

    protected $filllable = [
        'user_id',
        'dateTime',
        'country',
        'spot',
        'rating',
        'conditions',
    ];

    protected $hidden = [
        'user_id',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
