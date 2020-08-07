<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmailCc extends Model
{
    protected $table = 'email_ccs';

    protected $hidden = ['created_at', 'updated_at'];

    public function email()
    {
        return $this->belongsTo('App\Email');
    }
}
