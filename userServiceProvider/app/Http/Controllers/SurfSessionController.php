<?php

namespace App\Http\Controllers;

use App\Models\surfSession;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SurfSessionController extends Controller
{
    public function index() : JsonResponse{
        $user = auth()->user();

        $surfSessions = surfSession::where('user_id', $user->id)->get();

        return response()->json([
            'data' => $surfSessions,
        ], 200);
    }

    public function store(Request $request) : JsonResponse{
        try{
            surfSession::create($request->all());

            return response()->json([
                'success' => 'true',
            ], 200);
        }
        catch(Exception $e){
            return response()->json([
                'success' => 'false',
            ], 500);
        }
        
    }
    public function show() : JsonResponse{
        return response()->json([
            'data' => 'hello',
        ], 200);
    }
}
