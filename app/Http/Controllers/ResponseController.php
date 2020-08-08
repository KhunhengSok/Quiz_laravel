<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Http\Resources\Response\ResponseResource;
use App\Http\Resources\Response\ResponsesResource;
use App\Models\AnswerChoice;
use App\Models\Question;
use App\Models\Quiz;
use App\Models\Quiz_Respondent;
use App\Models\Quiz_Takers_Response;
use App\Models\Respondent;
use Dotenv\Validator;
use http\Env\Response;
use Illuminate\Http\Request;

class ResponseController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth:api', ['except'=>['store', 'update', 'destroy']]);
    }

    /**
     * Display a listing of the response for specified quiz.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($quiz_id)
    {
        $responses = Quiz_Respondent::where('quiz_id', $quiz_id)->get();
        return ResponsesResource::collection($responses);
    }

    /**
     * Store a newly created response in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request)
    {
        $validateData = $request->validate([
             'info'     => 'required',
             'quiz'     => 'required',
             'info["email"]'=> 'email'
        ]);
//        print($validateData);

        $info = $request->json('info');
        $quiz = $request->json('quiz');
        $answers = $request->json('answers');

        try{
            $respondent = Respondent::where('email', $info['email'])->first();
            if($respondent == null){
                $respondent = new Respondent([
                    'email'     => $info['email'],
                    'name'      => $info['name'],
                ]);
                $respondent->save();
            }
            $quizRespondent = new Quiz_Respondent([
                'respondent_id'     => $respondent->id,
                'quiz_id'           => $quiz['id'],
                'finish_time'       => isset($info['finish_time']) ? new \DateTime( $info['finish_time']) : now(),

            ]);
            $quizRespondent->save();

            $total_score =  0;
            foreach ($answers as $answer){
                $choice = AnswerChoice::where('id', $answer['chosen_choice_id'])->first();
                $scored = 0;
                if($choice->is_correct){
                    $question = Question::where('id', $choice->question_id)->first();
                    if($question != null){
                        $maxScore = $question->max_score;
                        $scored = $maxScore;
                        $total_score += $scored;
                    }
                }

                $response = new Quiz_Takers_Response([
                    'chosen_choice_id'  => $answer['chosen_choice_id'],
                    'taker_id'      => $respondent->id,
                    'question_id'   => $answer['question_id'],
                    'quiz_id'       => $quiz['id'],
                    'section_id'    => $answer['section_id'],
                    'scored'        => $scored
                ]);
                $response->save();
            }
            return \response([
                'total_score' => $total_score
            ], 201);
        }catch(\Exception $e){
            return \response($e->getMessage(), 400);
        }

    }

    /**
     * Display the specified response.
     *
     * @param  int  $quiz_id
     * @param  int  $respondent_id
     * @return \Illuminate\Http\Response
     */
    public function show($quiz_id, $respondent_id)
    {
//        $quiz = Quiz::where('id', $quiz_id)->with(['sections', 'sections.questions', 'sections.questions.answers'])->first();
//        if($quiz == null){
//            return \response(['message'=>'Can not find the quiz'], 400);
//        }

        $response = Quiz_Takers_Response::where(['taker_id' => $respondent_id, 'quiz_id' => $quiz_id])->get();
        if(!$response){
            return \response(['message'=>'Can not find the respondent'], 400);
        }

        ResponsesResource::withoutWrapping();
        return new ResponseResource($response);
    }




    /**
     * Cannot update response
     */
//    public function update(Request $request, $id){}

    /**
     * Cannot remove response.
     */
   // public function destroy($id){}
}
