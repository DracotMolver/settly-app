<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    /**
     * Get all the clients by admin
     */
    public function clients()
    {
        return $this->hasMany(Client::class);
    }

    /**
     * Get the assign authentication token
     */
    public function access()
    {
        return $this->hasOne(Access::class);
    }
}
