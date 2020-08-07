<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    protected $table = 'emails';

    //protected $fillable = ['subject', 'body'];

    public function to()
    {
        return $this->hasMany('App\EmailTo');
    }

    public function cc()
    {
        return $this->hasMany('App\EmailCc');
    }

    public function cco()
    {
        return $this->hasMany('App\EmailCco');
    }
}
