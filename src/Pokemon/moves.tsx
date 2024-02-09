import { Move } from '../Interfaces/IMove';
import { type } from '../Interfaces/IType';
import * as typesDispo from "./types.tsx";
import { getAPI } from "../Tools/toolBox.tsx"


/**
 * Récupère un tableau de moves et en sélectionne 4
 * @param json Tableau contenant les moves disponnibles
 * @returns un tableau de 4 moves 
 */
export async function Moves(json:any){
    let moves:Move[] = []           //  Tableau des attaques du pokemon
    let isPickedUp:Number[] = []    // Tableau des attaques déjà prises
    
    while(moves.length !== 4){
        let rand = Math.floor(Math.random() * json.length)

        if(!isPickedUp.includes(rand)){

            isPickedUp.push(rand)                                              //  On met l'indice dans le tableau des déjà pris

            let infoMove = await getAPI(json[rand]["move"]["url"])             //  On récupère toutes les info du Move
            let typeMove:type = getType(infoMove["type"]["name"])

            let unMove:Move = {nom: json[rand]["move"]["name"], accuracy: infoMove["accuracy"], power: infoMove["power"],
                                pp: infoMove["pp"], type: typeMove, category: infoMove["damage_class"]["name"]}

            moves.push(unMove)
        }
    }
    return moves
}

/**
 * Retourne le type demandé
 * @param typeMove Type à récupérer
 * @returns Un objet type || Retourne le type normal si le type demandé n'existe pas
 */
function getType(typeMove:string):type{
    return typesDispo[typeMove] || typesDispo.normal
}