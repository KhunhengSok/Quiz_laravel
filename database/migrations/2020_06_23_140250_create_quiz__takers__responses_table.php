<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuizTakersResponsesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quiz__takers__responses', function (Blueprint $table) {
            $table->id();
//            $table->smallInteger('chosen_answer_order');
            $table->smallInteger('chosen_choice_id');
//            $table->string('description', 255)->nullable();
            $table->smallInteger('scored')->nullable();
            $table->unsignedInteger('taker_id');
            $table->unsignedInteger('question_id');
            $table->unsignedInteger('quiz_id'); //
            $table->unsignedInteger('section_id'); //
            $table->timestamps();

            $table->foreign('taker_id')->references('id')->on('respondents')->onDelete('cascade');
            $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
            // $table->primary(['taker_id', 'question_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quiz__takers__responses');
    }
}
