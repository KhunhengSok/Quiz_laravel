<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        return [
            'type' => 'Quiz',
            'id' => (string)$this->id,
            'attributes' => [
                'title'             => $this->title ,
                'description'       => $this->description,
                'link'              => $this->link,
                'start_time'        => $this->start_time,
                'total_time'        => $this->total_time,
                'published_time'    => $this->published_time,
                'start_date'        => $this->start_date,
            ],
            'relationship' => new QuizRelationshipResource($this),
            'link'         => [
                'self' => route('quiz.show', $this->id),
            ]
        ];
    }
}
