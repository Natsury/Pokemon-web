import React from 'react';
import { Pokemon } from '../Interfaces/IPokemon';
import { info } from 'console';
import { Moves } from './moves';

/**
 * Récupère les information du pokémon demandé sur PokéAPI
 * @param {string} nom Nom du Pokémon
 */
export async function GetPokemon(nom:string){
    if(nom != null){
        const urlMetamorphe = "https://pokeapi.co/api/v2/pokemon/"+nom
        const request = new Request(urlMetamorphe)
        const reponse = await fetch(request)
        const json = await reponse.json()
        console.log(json["stats"])
        return json
    }
}

/**
 * Récupère les informations du pokemin demandé sur PokéAPI et fait le tri
 * @param nomPokemon Le nom du Pokemon à chercher
 * @returns Je sais pas encore quoi return
 */
export async function GetPokemonAPI(nomPokemon:string) {
    if(nomPokemon != null){
        const urlMetamorphe = "https://pokeapi.co/api/v2/pokemon/"+nomPokemon
        const request = new Request(urlMetamorphe)
        const reponse = await fetch(request)
        const json = await reponse.json()

        const infoPokemon:any = []                                          // 0 : hp
        json["stats"].forEach(uneStat => {                                  // 1 : attaque
            if(uneStat["stat"]["name"] != "special-defense"){
                infoPokemon.push(uneStat["base_stat"])                      // 2 : defense
            } else {                                                        // 3 : special
                let moyenne = (infoPokemon[3] + uneStat["base_stat"]) / 2   // 4 : speed
                infoPokemon[3] = moyenne
            }        
        });                                            
        console.log(json["moves"])                      
        console.log(infoPokemon)



        /*
        const pokemon:Pokemon = {nom: json["name"].toUpperCase(), atk: infoPokemon[1], def: infoPokemon[2],
                                     hp: infoPokemon[0], special: infoPokemon[3], speed: infoPokemon[4], moves: Moves(json)}
                                     */
        return json
    }
}