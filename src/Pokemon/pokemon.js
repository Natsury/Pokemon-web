import React from 'react';

/**
 * Récupère les information du pokémon demandé sur PokéAPI
 * @param {string} nom Nom du Pokémon
 */
async function GetPokemon(nom){
    if(nom != null){
        const urlMetamorphe = "https://pokeapi.co/api/v2/pokemon/"+nom
        const request = new Request(urlMetamorphe)
        const reponse = await fetch(request)
        const json = await reponse.json()
        return json
    }
}

export default GetPokemon;