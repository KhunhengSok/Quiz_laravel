<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class QuizRelationshipResource extends JsonResource
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
            'owner' =>  new UserResource($this->owner),
            'sections' =>  new SectionRelationshipResource($this->sections),
//            'sections' =>  SectionRelationshipResource::collection($this->sections),
        ];
    }
}
