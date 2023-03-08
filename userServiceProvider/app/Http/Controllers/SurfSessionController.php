<?php

namespace App\Http\Controllers;

use App\Models\SurfSession;
use App\Models\User;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SurfSessionController extends Controller
{
    public function index() : JsonResponse{
        $user = auth()->user();

        $surfSessions = SurfSession::where('user_id', 1 /*$user->id*/)->get();

        return response()->json([
            'data' => $surfSessions,
        ], 200);
    }

    public function store(Request $request) : JsonResponse{
        //TODO: Vaildate the request 
        //TODO: Add error handling

        //try{
            SurfSession::create([
                'user_id' => 1,//auth()->user()->id,
                'dateTime' => $request->dateTime,
                'country' => $request->country,
                'spot' => $request->spot,
                'rating' => $request->rating,
                'conditions' => $request->conditions,
            ]);

            return response()->json([
                'success' => 'true',
            ], 200);
        //}
        /*catch(Exception $e){
            return response()->json([
                'success' => 'false',
                'message' => $e->getMessage(),
            ], 500);
        }*/
        
    }
    public function show(SurfSession $surfSession) : JsonResponse{
        return response()->json([
            'data' => $surfSession,
        ], 200);
    }

    public function destroy(SurfSession $surfSession) : JsonResponse{
        $surfSession->delete();

        return response()->json([
            'success' => 'true',
        ], 200);
    }
    public function update(Request $request, SurfSession $surfSession) : JsonResponse{
        //TODO: Vaildate the request 

        $surfSession->update($request->all());

        return response()->json([
            'success' => 'true',
        ], 200);
    }
}
