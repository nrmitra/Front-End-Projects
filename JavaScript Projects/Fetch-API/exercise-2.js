/*
    1. Install node-fetch if your Node version is less than 18
       using NPM, and import it in to your file (ES Module style)

    2. Have a read through pokeapi.co

    2. Make a request to:
       https://pokeapi.co/api/v2/pokemon/pikachu
       and print out pikachu's "official-artwork"'s URL for
       their image (png). Visit this URL to make sure it works
       using your Browser.
    
    HINT: Be careful with the naming of the keys here when trying
          to access the parsed JSON
*/

const result = async () => {

   const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
   response.json().then((pokemonObject) => {
      console.log(pokemonObject.sprites.other["official-artwork"].front_default);
    });

}

result();


// import fetch from "node-fetch";

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((response) => response.json())
//   .then((pokemonObject) => {
//     console.log(pokemonObject.sprites.other["official-artwork"].front_default);
//   });