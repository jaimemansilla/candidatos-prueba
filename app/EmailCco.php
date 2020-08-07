<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailCco extends Model
{
    protected $table = 'email_ccos';

    protected $hidden = ['created_at', 'updated_at'];

    public function email() 
    {
        return $this->belongsTo('App\Email');
    }
}
