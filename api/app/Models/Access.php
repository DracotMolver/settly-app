<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Access extends Model
{
    use HasFactory;

    /**
     * Get the admin that has a single token
     */
    public function admin()
    {
        return $this->hasOne(Admin::class);
    }
}
