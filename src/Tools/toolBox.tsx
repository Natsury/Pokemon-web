import * as typesDispo from "../Pokemon/types.tsx";
import { type } from "../Interfaces/IType.ts";
import * as explications from "./data.tsx"
import { explication } from "../Interfaces/IExplication.ts";

/**
 * Effectue une requete HTTP à l'url demandée
 * @param url l'url de la requete
 * @returns Un json des infos demandées
 */
export async function getAPI(url:string) {
    try{
        let request:Request = new Request(url)
        let reponse = await fetch(request)
        let json = await reponse.json()
        return json
    }catch(e){
        console.log(e)
        
    }
}


/**
 * Retourne le type demandé
 * @param typeMove Type à récupérer
 * @returns Un objet type || Retourne le type normal si le type demandé n'existe pas
 */
export function getType(typeMove:string):type{
    return typesDispo[typeMove] || typesDispo.normal
}

/**
 * Retourne l'explication demandé 
 * @param uneExplication le nom de l'explication demandé
 * @returns L'explication avec son nom et sa description
 */
export function getExplication(uneExplication:string):explication{
    return explications[uneExplication]
}