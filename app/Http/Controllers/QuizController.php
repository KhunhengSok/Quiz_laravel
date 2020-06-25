<?php

namespace App\Http\Controllers;

use App\Http\Resources\QuizResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;


use App\Models\Quiz, App\Models\User, App\Models\Section, App\Models\Question, App\Models\AnswerChoice ;
use Illuminate\Http\Response;
use mysql_xdevapi\Exception;
use function GuzzleHttp\Psr7\get_message_body_summary;

class QuizController extends Controller
{
    public function __construct()
    {
//        $this->middleware('auth', ['except'=>['store', 'update', 'destroy']]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //show ask to create quiz page / home page
//        Auth::user;
        $user_id = 1;
        $user = User::where('id', $user_id)->with(['quizzes', 'quizzes.sections', 'quizzes.sections.questions','quizzes.sections.questions.answers'])->paginate();
//        return new UserResource($user);
        return UserResource::collection($user);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //retrieving value
        $quiz = $request->json('quiz');
        $sections = $request->json('sections');
        $questions = $request->json('questions');
        $choices = $request->json('choices');

        try{
            $user_id = auth()->user()->id;
        }catch (\Exception $e){
            $user_id = 1;  // need to change
        }

        $quiz['owner_id'] = $user_id; //needed
        $newQuiz = new Quiz();
        $newQuiz->fill($quiz);
        $newQuiz->save();

        $quiz_id = $newQuiz->id;


        //create sections
        foreach ($sections as $section){
            $newSection = new Section();
            $section['quiz_id'] = $quiz_id;
            $newSection->fill($section);
            $newSection->save();
        }

        $questionObjects = Array();
        //create questions
        foreach ($questions as $question){
            $section = Section::where(['quiz_id' => $quiz_id,
                        "section_order" => $question['section_order']])->first();
            unset($question['section_order']);
            $question['section_id'] = $section->id;

            try{
                $newQuestion = new Question();
                $newQuestion->fill($question);
            }catch (\Exception $e){
                return \response($e, 400);
            }

            try{
                $newQuestion->save();
                array_push($questionObjects, $newQuestion);
            }catch(\Exception $e){
                return response($e->getMessage(), 400);

            }
        }

        foreach ($choices as $choice) {
            $question_id = -1 ;
            foreach ($questionObjects as $question){
                if($question->question_order == $choice['question_order']){
                    $question_id = $question->id;
                    break;
                }
            }
            if($question_id != -1){
                try{
                    $answer = new AnswerChoice();
                    $choice['question_id'] = $question_id;
                    unset($choice['question_order']);
                    $answer->fill($choice);
                    $answer->save();

                }catch (\Exception $e){
                    return \response($e->getMessage(), 400);
                }

            }else{
                return \response('Can not find the corresponding question', 400);
            }
        }

        return $this->show($quiz_id);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {

        QuizResource::withoutWrapping();

        $quiz = Quiz::where('id', $id)->with(['sections', 'sections.questions','sections.questions.answers'])->first();
        return new QuizResource($quiz);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        //retrieving value
        $quiz = $request->get('quiz');
        $sections = $request->input('sections');
        $questions = $request->json('questions');
        $choices =  $request->json('choices');

//        print($request['quiz']);
//        print($request['sections']);
//        print($request['questions']);
//        print($request['choices']);

        //check ownership
        /* ToDo
        $user_id = auth()->user()->id;
        if( $quizObject->owner_id != $user_id){
            return \response(null, 401);
        }
         */


        try{
            //check 'quiz' key is provided
            if($quiz){
                $quizObject = Quiz::where('id', $id)->first();
                if (!$quizObject){
                    throw new \Exception("Can not find Quiz with id: " + $id);
                }else{
                    $quizObject->update($quiz);
                    $quizObject->save();
                };
            }

            //if 'section' key is provided
            if($sections){
                foreach ($sections as $section){
                    $sectionObject = Section::where('id', $section['id'])->first();
                    if(!$sectionObject){
                        throw new Exception("Can not find section with id: " + $section['id']);
                    }
                    $sectionObject->update($section);
                    $sectionObject->save();
                }
            }

            //if 'questions' key is provided
            if($questions){
                print('run');

                foreach ($questions as $question){
                    $questionObject = Question::where('id', $question['id'])->first();
                    if(!$questionObject){
                        throw new Exception("Can not find question with id: " + $question['id']);
                    }
                    $questionObject->update($question);
                    $questionObject->save();
                }
            }

            //if 'choices' key is provied
            if($choices){
                print('run');

                foreach ($choices as $choice){
                    $choiceObject = AnswerChoice::where('id', $choice['id'])->first();
                    if(!$choiceObject){
                        throw new Exception("Can not find section with id: " + $section['id']);
                    }
                    $choiceObject->update($choice);
                    $choiceObject->save();
                }
            }



            return $this->show($id);
        }catch (\Exception $e){
            return \response(['message'=>$e->getMessage()], 400);
        }


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $quiz = Quiz::where('id', $id)->first();
        if($quiz and $quiz->delete()){
            //204: no content
            return \response()->json(null, 204);
        }
        return \response()->json(null, 404);

    }
}
