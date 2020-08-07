<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailTo extends Model
{
    protected $table = 'email_tos';

    protected $hidden = ['created_at', 'updated_at'];

    public function email()
    {
        return $this->belongsTo('App\Email');
    }
}
