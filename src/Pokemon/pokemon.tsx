import { Pokemon } from '../Interfaces/IPokemon';
import { type } from '../Interfaces/IType.ts';
import { Moves } from './moves.tsx'
import { getType } from '../tools/toolBox.tsx';

const lvlPokemon:number = 50        //  Défini le niveau des pokemon
const statGrowth:number = 5        //  Croissance d'une stat

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
        return json
    }
}

/**
 * Récupère les informations du pokemin demandé sur PokéAPI et fait le tri
 * @param nomPokemon Le nom du Pokemon à chercher
 * @returns Je sais pas encore quoi return
 */
export async function GetPokemonAPI(nomPokemon:string):Promise<Pokemon | null> {
    if(nomPokemon != null){
        let url = "https://pokeapi.co/api/v2/pokemon/"+nomPokemon
        let request = new Request(url)
        let reponse = await fetch(request)
        let json = await reponse.json()
        let moves = await Moves(json["moves"])                              //  On récupère les abilités du pokemon

        const infoPokemon:any = []                                                                          // 0 : hp
        json["stats"].forEach(uneStat => {                                                                  // 1 : attaque
            if(uneStat["stat"]["name"] !== "special-defense"){
                infoPokemon.push(uneStat["base_stat"] + (statGrowth * lvlPokemon))                          // 2 : defense
            } else {                                                                                        // 3 : special
                let moyenne = (infoPokemon[3] + (uneStat["base_stat"] + (statGrowth * lvlPokemon))) / 2     // 4 : speed
                infoPokemon[3] = moyenne                                    // Comme on fait une stat "special" global, je fais la moyenne de l'atq spé et def spé du pokemon
            }        
        });


        let typesDuPokemon:type[] = []

        json["types"].forEach(unType => {
            typesDuPokemon.push(getType(unType["type"]["name"]))
        });
        
        let spritesPokemon:string[] = []                            

        spritesPokemon.push(json["sprites"]["front_shiny"])                //   0 : Front
        spritesPokemon.push(json["sprites"]["back_shiny"])                 //   1 : Back

        const pokemon:Pokemon = {nom: json["name"].toUpperCase(), atk: infoPokemon[1], def: infoPokemon[2],
                                    hp: infoPokemon[0], special: infoPokemon[3], speed: infoPokemon[4], 
                                    moves: moves, types: typesDuPokemon, lvl: lvlPokemon, sprites: spritesPokemon}                         
        return pokemon
    } else{
        return null
    }
    
}