<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Admin extends Model
{
    use HasFactory;

    protected $hidden = ['password', 'created_at', 'deleted_at', 'updated_at'];

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
        return $this->where('email', Str::lower($email))->first();
    }
}
