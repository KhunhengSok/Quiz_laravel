<?php

namespace App\Http\Resources\Response;

use App\Http\Resources\QuizResource;
use App\Models\Quiz;
use Illuminate\Http\Resources\Json\JsonResource;
use phpDocumentor\Reflection\Types\Parent_;

class ResponseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        if($this->resource != null){
            $quiz_id =$this->resource[0]['quiz_id'];
        }

        $quiz = Quiz::where('id', $quiz_id)->with(['sections', 'sections.questions', 'sections.questions.answers'])->first();
        if($quiz == null){
            return \response(['message'=>'Can not find the quiz'], 400);
        }
        return [
            'quiz'          => new QuizResource($quiz),
            'chosen_answers' => new ChosenAnswerResource($this->resource),
            'self'      => route('quiz.answer', '')
        ];
    }
}
