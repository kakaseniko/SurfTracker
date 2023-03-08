<?php

namespace App\Filament\Resources\SurfSessionResource\Pages;

use App\Filament\Resources\SurfSessionResource;
use Filament\Pages\Actions;
use Filament\Resources\Pages\EditRecord;

class EditSurfSession extends EditRecord
{
    protected static string $resource = SurfSessionResource::class;

    protected function getActions(): array
    {
        return [
            Actions\DeleteAction::make(),
        ];
    }
}
