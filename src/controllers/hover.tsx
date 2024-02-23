import { explication } from "../Interfaces/IExplication.ts"
import { getExplication } from "../tools/toolBox.tsx"

/**
 * Remplace le label de descritpion par la descrition du bouton hover
 * @param component Le bouton qui est hover
 */
export async function infoHover(component:HTMLElement){
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
export async function infoHoverOut(component:any){
    let lblDescription = document.getElementById("labelDescription")     //  Le '!' permet de dire que l'attribut ne doit pas être nu
    if(lblDescription !== null){
        lblDescription.textContent = lblDescription.getAttribute("for")
    } else {
        let lbl = document.createElement("label",)
    }
}