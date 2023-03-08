<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SurfSessionResource\Pages;
use App\Filament\Resources\SurfSessionResource\RelationManagers;
use App\Models\SurfSession;
use Filament\Forms;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SurfSessionResource extends Resource
{
    protected static ?string $model = SurfSession::class;

    protected static ?string $navigationIcon = 'heroicon-o-collection';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('user_id')
                    ->numeric()
                    ->required(),
                Forms\Components\TextInput::make('country')->required(),
                Forms\Components\TextInput::make('spot')->required(),
                Forms\Components\TextInput::make('dateTime')->required(),
                Forms\Components\TextInput::make('rating')
                    ->numeric()
                    ->minValue(1)
                    ->maxValue(5)
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('country'),
                Tables\Columns\TextColumn::make('spot'),
                Tables\Columns\TextColumn::make('dateTime'),
                Tables\Columns\TextColumn::make('rating'),
            ])
            ->filters([
            ])
            ->actions([
            ])
            ->bulkActions([
            ]);
    }
    
    public static function getRelations(): array
    {
        return [
            //
        ];
    }
    
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListSurfSessions::route('/'),
            'create' => Pages\CreateSurfSession::route('/create'),
            //'edit' => Pages\EditSurfSession::route('/{record}/edit'),
        ];
    }    
}
