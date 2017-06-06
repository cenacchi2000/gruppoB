
function scorrifoto() 
{
    
    
    var id = document.getElementById('marquee');  //prendo l'id 

    var delayInSeconds = 3; //tempo in secondi

    var images  = ['skype.png','unified.jpg','headset.jpg']; //immagini da visualizzare, array

    var num = 0; //contatore
    
    var cambiaImg =function(){ //funzione

        var size = images.length;  //prendo il numero di immagini della funzione
        
        id.src = images[num];//sostituisco l'immagine
        
        num++;//aumento il numeratore nell'array

        if (num == size) {num = 0;} //azzero il contatore

    };

    setInterval(cambiaImg, delayInSeconds * 1000 );
}





/* da usare con la parte del sito in inglese
function active(lang)
{
    if(lang == 1)
    alert("Acquisto avvenuto con successo!");
    else{
    alert("Purchase confirmed");
    }


}

function check(lang) {

    if(lang == 1)
    {
        var password = document.forms["dati"]["password"].value;
        var confPassword = document.forms["dati"]["confPassword"].value;
        if (password == confPassword) 
        {
            alert("Registrazione avvenuta con successo");

        }else{
            alert("Le password non coincidono");
            return false;

        }
    }
    else
    {
        var password = document.forms["dati"]["password"].value;
        var confPassword = document.forms["dati"]["confPassword"].value;
        if (password == confPassword) 
        {
            alert("Registrated with success");

        }else{
            alert("Passwords doesnt match");
            return false;


        }
    }
}
*/