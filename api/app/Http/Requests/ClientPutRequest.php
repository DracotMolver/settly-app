<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

use App\Models\Access;

class ClientPutRequest extends FormRequest
{
    protected $access;

    function __construct(Access $access)
    {
        $this->access = $access;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        $authAdmin = $this->access->findByToken($this->bearerToken());

        return $authAdmin;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'alpha|min:3',
            'email' => 'email',
            'picture' => 'nullable|image'
        ];
    }
}
