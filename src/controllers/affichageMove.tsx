import { pokemonAlly } from "../component/CadreBattle.tsx";

/**
 * Affiche les attaques de Pokemon sur le clique du fight
 */
export function onClickPrintMove(){
    let divContent = document.getElementById("displayMoves")
    if(divContent !== null && pokemonAlly !== null){
        if(divContent.children.length <= 1){
            console.log("ça passe ici")
            let lblDescription = document.getElementById("labelDescription")
            let divDescription = document.getElementById("description")
            if(lblDescription !== null && divDescription !== null) divDescription.removeChild(lblDescription)

            pokemonAlly.moves.forEach(unMove =>{
                console.log(unMove)
                let label = document.createElement("label")
                label.setAttribute("name", unMove.nom)
                label.textContent = unMove.nom
                label.classList.add()
                divContent.append(label)
            })
        }else{
            while(divContent.childNodes.length !== 0){
                divContent.childNodes.forEach(unLbl =>{
                    unLbl.remove()
                })
            }
        }
    }
}