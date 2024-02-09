//import { Pokemon } from '../Interfaces/IPokemon';
import {Moves} from './moves.tsx'
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
        const url = "https://pokeapi.co/api/v2/pokemon/"+nomPokemon
        const request = new Request(url)
        const reponse = await fetch(request)
        const json = await reponse.json()

        const infoPokemon:any = []                                          // 0 : hp
        json["stats"].forEach(uneStat => {                                  // 1 : attaque
            if(uneStat["stat"]["name"] !== "special-defense"){
                infoPokemon.push(uneStat["base_stat"])                      // 2 : defense
            } else {                                                        // 3 : special
                let moyenne = (infoPokemon[3] + uneStat["base_stat"]) / 2   // 4 : speed
                infoPokemon[3] = moyenne                                    // Comme on fait une stat "special" global, je fais la moyenne de l'atq spé et def spé du pokemon
            }        
        });                                            

        let moves = await Moves(json["moves"])

        console.log(moves)
        /*
        const pokemon:Pokemon = {nom: json["name"].toUpperCase(), atk: infoPokemon[1], def: infoPokemon[2],
                                    hp: infoPokemon[0], special: infoPokemon[3], speed: infoPokemon[4], moves: Moves(json)}
                                     */
        return json
    }
}