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