import { type } from "./IType"
import { Move } from "./IMove"

export interface Pokemon{
    nom: string             //  Nom du Pokemon
    atk: number             //  Attaque du Pokemon
    def: number             //  Défense du Pokemon
    hp: number              //  Vie du Pokemon
    speed: number           //  Vitesse du Pokemon (Permet de définir quel Pokemon attaque en premier)
    types: type[]           //  Type du Pokemon
    lvl: number             //  Niveau du Pokemon
    special: number         //  Attaque et défense spéciale du Pokemon
    moves: Move[]           //  Attaques disponible du Pokemon 
    sprites:string[]        //  Sprites de devant et derrière du Pokemon
}