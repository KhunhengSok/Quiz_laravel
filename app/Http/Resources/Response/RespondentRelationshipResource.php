<?php

namespace App\Http\Resources\Response;

use App\Models\Respondent;
use Illuminate\Http\Resources\Json\JsonResource;

class RespondentRelationshipResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        print($this->resource);
        $respondent = Respondent::where('id', $this->resource)->first();

        if($respondent == null){
            return parent::toArray($request);
        }else{
            return [
                'email'     => $respondent->email,
                'name'      => $respondent->name,
            ];
        }

    }
}
