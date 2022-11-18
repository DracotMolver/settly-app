<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    use HasFactory;

    protected $fillable = ['token'];

    /**
     * Get the admin that has a single token
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    public function findByToken($token)
    {
        return $this->where('token', $token)->first();
    }
}
