let userName = "David";
document.getElementById("name").addEventListener('keyup', function enterName() {
    /* l'élément 'keyup' permet d'envoyer une alert dès le relachement d'une touche de clavier */
    let name = document.getElementById("name").value;
    
    if (userName == name){
        document.getElementById("name").style.borderColor="green"; /* Après avoir récupéré l'élément "name" dans le fichier html, on lui indique un style, ici une bordure verte. */
        document.getElementById("message").innerHTML="<div class=\"alert alert-success\" role=\"alert\">Bien joué !</div>";
   } /* ici le "innerHTML" permet d'envoyer la div qui suit dans le contenu de l'id "message" du fichier html 
   Attention à bien échapper les "" avec "\"     */
   else {
    document.getElementById("name").style.borderColor="red";
    document.getElementById("message").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Raté !</div>";
   }
})

           
         
