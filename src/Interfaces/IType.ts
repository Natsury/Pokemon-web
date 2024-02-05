export interface type{
    nom: string                 //  Nom du type 
    color: string               //  Couleur correspondant au type
    weakness: type[]            //  Faiblesses liés à ce type
    imunities: type[]           //  Imunisé contre 
    category: string            //  Dégats Spécial ou physique
}