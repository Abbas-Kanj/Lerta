<?php

namespace App\Http\Controllers\user;

use App\Http\Controllers\Controller;
use App\Models\DangerZone;
use App\Models\User;
use Illuminate\Http\Request;

class FamilyController extends Controller
{
    public function index()
    {
        $user_family_id = auth()->user()->family_id;
        $users = User::where('family_id', $user_family_id)->where('id', '!=', auth()->id())->get();
        return response()->json(['status' => 'success', 'data' => $users]);
    }
    public function dangerzones()
    {
        $danger_zones = DangerZone::all();
        return response()->json(['status' => 'danger', 'data' => $danger_zones]);
    }
    public function store()
    {
        $user = auth()->user();
    }
}
