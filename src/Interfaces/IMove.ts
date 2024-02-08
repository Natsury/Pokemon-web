import { type } from "./IType"

export interface Move{
    nom: string         //  Le nom du Move
    type: type        //  Le type du Move
    power: number       //  Puissance
    accuracy: number    //  Précision
    pp: number          //  Nombre d'utilisation du move
    category: string    //  Dégats Spécial ou physique
}