<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    /**
     * Get the admin of one client.
     */
    public function admin() {
        return $this->hasOne(Admin::class);
    }
}
