<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function user()
    {
        $user = User::where('id', auth()->user()->id)->first();

        return $user;
    }
}
