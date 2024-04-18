<?php

namespace App\Http\Controllers\shelters;

use App\Http\Controllers\Controller;
use App\Models\Shelter;
use Illuminate\Http\Request;

class ShelterController extends Controller
{
    public function index()
    {
        $shelters = Shelter::all();
        return response()->json(['status' => 'success', 'data' => $shelters]);
    }
    private function calculateHaversineDistance(float $lat1, float $lon1, float $lat2, float $lon2): float
    {
        // Radius of the Earth in kilometers
        $earthRadius = 6371.0;

        // Convert degrees to radians
        $lat1 = deg2rad($lat1);
        $lon1 = deg2rad($lon1);
        $lat2 = deg2rad($lat2);
        $lon2 = deg2rad($lon2);

        // Calculate differences
        $dLat = $lat2 - $lat1;
        $dLon = $lon2 - $lon1;

        // Haversine formula
        $a = sin($dLat / 2) ** 2 + cos($lat1) * cos($lat2) * sin($dLon / 2) ** 2;
        $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

        // Calculate distance
        return $earthRadius * $c;
    }
    public function get_nearset_shelters(): array
    {
        $earthquakeLat = 22.2;
        $earthquakeLon = 88.3;
        $dangerZoneRadius = 2021;
        $shelters = Shelter::all();
        // List of shelters that are outside the danger zone
        $sheltersOutsideDangerZone = [];

        // Iterate through each shelter
        foreach ($shelters as $shelter) {
            $shelterLat = $shelter['latitude'];
            $shelterLon = $shelter['longitude'];

            // Calculate the distance from the earthquake center to the shelter using Haversine formula
            $distance = $this->calculateHaversineDistance($earthquakeLat, $earthquakeLon, $shelterLat, $shelterLon);

            // If the distance is greater than the danger zone radius, the shelter is outside the danger zone
            if ($distance > $dangerZoneRadius) {
                $sheltersOutsideDangerZone[] = $shelter;
            }
        }

        return $sheltersOutsideDangerZone;
    }
}
