<?php

namespace App\Http\Resources\Response;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Response\RespondentRelationshipResource;

class ResponsesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
//        return parent::toArray($request);
        return [
            'response' => parent::toArray($request),
            'respondent' => new RespondentRelationshipResource($this->respondent_id),
            'link' => [
                'self' => route('quiz.answer', ['quiz_id'=>$this->quiz_id, 'respondent_id'=>$this->respondent_id]),
            ]
        ];
    }
}
