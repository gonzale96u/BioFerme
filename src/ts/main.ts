interface Produit{
  nom : string;
  quantite : number;
  code : string;
}

class AfficheVente {

  produits : Array<Produit>;

  Affiche(index : number) : string{
    return "Produit : " + this.produits[index].nom;
  }

  Ajoute(produit : Produit){
    this.produits.push(produit);
  }

}
