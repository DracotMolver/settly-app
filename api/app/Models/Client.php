<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Client extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $hidden = ['password', 'created_at', 'deleted_at', 'updated_at', 'admin_id'];

    /**
     * Get the admin of one client.
     */
    public function admin()
    {
        return $this->belongsTo(Admin::class);
    }

    public function findByEmail($email)
    {
        $this->where('email', $email)->first();
    }
}
