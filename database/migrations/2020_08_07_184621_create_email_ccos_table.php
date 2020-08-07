<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailCcosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_ccos', function (Blueprint $table) {
            $table->id();
            $table->string('email_address');
            $table->bigInteger('email_id')->unsigned();
            $table->timestamps();

            $table->foreign('email_id')->references('id')->on('emails')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_ccos');
    }
}
