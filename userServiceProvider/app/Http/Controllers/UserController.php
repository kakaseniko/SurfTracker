<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function store(Request $request): JsonResponse {
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password, //hash the password somewhere, not here though
            'skillLevel' => $request->skillLevel,
        ]);

        //$token = $user->createToken('token-name')->plainTextToken;

        return response()->json([
            'success' => 'true',
        ], 200);

    }
}
