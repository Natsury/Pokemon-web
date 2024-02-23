import { explication } from "../Interfaces/IExplication.ts"
import { getExplication } from "../tools/toolBox.tsx"

/**
 * Remplace le label de descritpion par la descrition du bouton hover
 * @param component Le bouton qui est hover
 */
export function infoHover(component:HTMLElement){
    let lblDescription:HTMLElement | null = document.getElementById("labelDescription")    //  Le '!' permet de dire que l'attribut ne doit pas être nul
    if(lblDescription !== null){
        let temp:string = component["target"]["htmlFor"]
    let description:explication = getExplication(temp)
    lblDescription.textContent = description.descritpion
    }
}


/**
 * Réinitialise la description à son état d'origine
 * @param component Le label de description
 */
export function infoHoverOut(component:any){
    let divMoves = document.getElementById("displayMoves")
    if(divMoves !== null && divMoves.childElementCount === 0){
        let divDivision = document.getElementById('description')
        let lblDescription = document.getElementById("labelDescription")     //  Le '!' permet de dire que l'attribut ne doit pas être nul
        if(divDivision!== null && divDivision.children.length === 1){
            if(lblDescription !== null )lblDescription.textContent = lblDescription.getAttribute("for")
        } else if(divDivision!== null && divDivision.children.length === 0){
            let divDescription = document.getElementById('description')
            let lbl = document.createElement("label")
            lbl.setAttribute("id", "labelDescription")
            lbl.setAttribute("for", "Aller faut faire le combat la")
            lbl.textContent = "Aller faut faire le combat la"
        
            if(divDescription !== null) divDescription.appendChild(lbl)
        }
    }
}