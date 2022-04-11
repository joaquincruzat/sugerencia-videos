//Clases

class Multimedia {
#url
    constructor (url) {
        this.#url = url;
    }
get url (){
    return this.#url;
}
set url (nuevaUrl){
    this.#url = nuevaUrl;
}

}

class Reproductor extends Multimedia {
    constructor (id){
        super (`https://www.youtube.com/embed/${id}`)
    this.id = id;
    }

playMultimedia() {
    document.getElementById("musica").setAttribute("src", this.url);
}
playMultimedia2() {
    document.getElementById("series").setAttribute("src", this.url);
}
setInicio(){
    document.getElementById("peliculas").setAttribute("src", this.url);
    console.log ("Este método sirve para modificar la URL")
}

}

//Referencia HTML

const collapseMusica = document.querySelector('[data-target="#collapseOne"]');
const collapsePelicula = document.querySelector('[data-target="#collapseTwo"]');
const collapseSerie = document.querySelector('[data-target="#collapseThree"]');

const iframeMusica = document.getElementById ("musica");
const iframePelicula = document.getElementById ("peliculas");
const iframeSerie = document.getElementById ("series");

collapseMusica.addEventListener("click", ()=> {
    const reproductor = new Reproductor("AtIh_PLNsJY");
    reproductor.playMultimedia();
});

collapsePelicula.addEventListener ("click", ()=>{
    const reproductor2 = new Reproductor("qUyDG7La2XI?start=14");
    reproductor2.setInicio();
});

collapseSerie.addEventListener ("click", ()=>{
    const reproductor3 = new Reproductor("0STDZqXCTxs");
    reproductor3.playMultimedia2();
});