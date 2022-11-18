<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    use HasFactory;

    protected $hidden = ['password'];

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

    public function findByEmail($email)
    {
        return $this->where('email', $email)->first();
    }
}
