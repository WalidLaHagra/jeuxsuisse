debut()
function debut() {
    montableau = [];
    groupe = prompt("Quelle est nom de votre groupe si vous voulez arreter faite stop ")
    while (groupe != "stop") {
        groupe = prompt("Quelle est nom de votre groupe si vous voulez arreter faite stop ")
    }
    choix()
    if (montableau.length < 2) {
        montableau.push(groupe);
    } else {
        alert("Le nombre de groupe maximum est atteint.");
        for (i = 0; i < montableau.length; i++) {
            console.log(choix())
        }
    }
}

function choix() {
    PileOuFace()
    PierreFeuilleCiseaux()
    JustePrix()
}

function PileOuFace() {
    let piece
    let resultat2
    piece = prompt("Pile ou Face ?")
    let montableau3 = ['Pile', 'Face']
    piece = prompt("Pile ou Face ?")
    resultat2 = montableau3[Math.floor(Math.random() * montableau3.length)];
    alert("Le resultat du tirage est " + resultat2)
    if (piece == resultat2) {
        alert("Vous avez gagner 1 point ")
    } else if (piece != resultat2) {
        alert("Vous avez perdu 1 point")
    }

    alert("Vous avez " + i + " de point(s)")
}

function PierreFeuilleCiseaux() {
    for (let i = 0; i < 3; i = i + 1) {
        while (true) {
            montableau2 = ["Pierre", "Feuille", "Ciseaux"]
            rep1 = prompt("Pierre, Feuille, ou Ciseaux ?")
            if (rep1 == "Pierre") {
                break
            }
            else if (rep1 == "Ciseaux") {
                break
            }
            else if (rep1 == "Feuille") {
                break
            }
        }
        resultat = montableau2[Math.floor(Math.random() * montableau2.length)];
        alert("Ordinateur : " + resultat + " | Vous : " + rep1)
        if (resultat == rep1) {
            alert("Il y'a egaliter")
        }
        if (resultat == "Ciseaux") {
            if (rep1 == "Pierre") {
                alert("Vous avez gagner ")
            }
        }
        if (resultat == "Pierre") {
            if (rep1 == "Ciseaux") {
                alert("Vous avez perdu")
            }
        }
        if (resultat == "Ciseaux") {
            if (rep1 == "Feuille") {
                alert("Vous avez perdu")
            }
        }
        if (resultat == "Feuille") {
            if (rep1 == "Pierre") {
                alert("Vous avez perdu")
            }
        }
        if (resultat == "Pierre") {
            if (rep1 == "Feuille") {
                alert("Vous avez gagner")
            }
        }
        if (resultat == "Feuille") {
            if (rep1 == "Ciseaux") {
                alert("Vous avez perdu")
            }
        }
    }
}

function JustePrix() {
    min = 0
    max = 1000
    resultat2 = Math.floor(Math.random() * (max - min))
    for (i = 0; i < 20; i++) {
        alert("Vous allez jouer aux Juste Prix ")
        alert(resultat2)
        while (true) {
            chiffre = prompt("Donner un chiffre")
            while (chiffre > resultat2) {
                alert("Plus bas")
                chiffre = prompt("Donner un chiffre")
            } while (chiffre < resultat2) {
                alert("Plus haut")
                chiffre = prompt("Donner un chiffre")
                if (resultat2 == chiffre) {
                    alert("Bien Jouez !!")
                    exit()
                }
            }
        }
    }
}
