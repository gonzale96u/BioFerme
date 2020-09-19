var AfficheVente = /** @class */ (function () {
    function AfficheVente() {
    }
    AfficheVente.prototype.Affiche = function (index) {
        return "Produit : " + this.produits[index].nom;
    };
    AfficheVente.prototype.Ajoute = function (produit) {
        this.produits.push(produit);
    };
    return AfficheVente;
}());
