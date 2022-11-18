<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    /**
     * Get the admin of one client.
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }
}
