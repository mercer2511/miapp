<?php

namespace App\Providers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\ServiceProvider;
use Illuminate\Http\Client\ConnectionException;

class OrchestratorServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        try {
            $response = Http::timeout(2)
                ->get(config('database.orch_url') . '/api/master/GameServer:3306');

            if ($response->ok()) {
                $master = $response->json('Key');
                config()->set('database.connections.mysql.host', $master['Hostname']);
                config()->set('database.connections.mysql.port', $master['Port']);
            }
        } catch (ConnectionException $e) {
            // Puedes loguear el error o manejarlo según tu necesidad
            // \Log::error('No se pudo conectar al orquestador: ' . $e->getMessage());
        }
    }
}
