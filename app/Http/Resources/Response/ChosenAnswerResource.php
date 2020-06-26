<?php

namespace App\Http\Resources\Response;

use Illuminate\Http\Resources\Json\JsonResource;

class ChosenAnswerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      /*  return [
            $this->question_id => [
                'question_id'   => $this->question_id,
                'scored'        => $this->scored,
                'taker_id'      => $this->taker_id,
                'chosen_choice_id' => $this->chosen_choice_id,
            ]
        ];*/
        return parent::toArray($this);
    }
}
