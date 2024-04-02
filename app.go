package main

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) FindPokemon(pokemon string) Pokemon {
	url := fmt.Sprintf("%s%s", "https://pokeapi.co/api/v2/pokemon/", pokemon)

	response, err := http.Get(url)
	if err != nil {
		fmt.Println(err)
	}

	responseData, err := io.ReadAll(response.Body)

	var pk Pokemon

	json.Unmarshal(responseData, &pk)

	return pk

}
