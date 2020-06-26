<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizRespondentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz__respondents', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('respondent_id');
            $table->unsignedInteger('quiz_id');
            $table->smallInteger('scored')->nullable();
            $table->dateTime('finish_time');
            $table->timestamps();

            $table->foreign('quiz_id')->references('id')->on('quizzes')->onDelete('cascade');
            $table->foreign('respondent_id')->references('id')->on('respondents')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quiz__respondents');
    }
}
