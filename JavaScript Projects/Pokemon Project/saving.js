import fs from "fs/promises";
import path from "path";
import { fetchPokemon } from "./prompts.js"
import { create } from "domain";

const saveImageFile = async (filePath, arrayBuffer) => {
    await fs.writeFile(filePath, Buffer.from(arrayBuffer)); 
}

const createFolder = async (folderName) => {
console.log(process.cwd());
const folderPath = path.join(process.cwd(), folderName);
    try{
        await fs.access(folderPath)
    
    }
    catch{
        fs.mkdir(folderPath)
    
    }
};

//const pokemonObject = await fetchPokemon("mewtwo");

const savePokemonStats = async (folderName, pokemonStatsObject) => {

    let statString = "";

    for (const stat of pokemonStatsObject){
        statString += `${stat.stat.name}: ${stat.base_stat}\n`;
        
    }
    console.log(statString);
    await createFolder(folderName);
    const filePath = path.join(process.cwd(), folderName, "stats.txt");
    await fs.writeFile(filePath, statString);

};

//savePokemonStats("mewtwo",pokemonObject.stats);


const savePokemonArtwork = async (folderName, pokemonSpritesObject) => {
    const url = pokemonSpritesObject.other["official-artwork"].front_default;
    console.log(url);
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();

    await createFolder(folderName);
    const filePath = path.join(process.cwd(), folderName, "artwork.png");
    await saveImageFile(filePath, arrayBuffer);
    
    //await fs.writeFile('artwork.png', Buffer.from(arrayBuffer));
}

const savePokemonSprites = async (folderName, pokemonSpritesObject) => {
    
    let spritePromises = [];
    let spriteNames = [];
    
    for (const [name, url] of Object.entries(pokemonSpritesObject)){
        if(!url) continue;
        if (name === "other" || name === "versions") continue;

        spritePromises.push(fetch(url).then((res) => res.arrayBuffer()));
        spriteNames.push(name);
        console.log(name, url);
       
    }

    spritePromises = await Promise.all(spritePromises);
    await createFolder(folderName);
    for(let i =0; i < spritePromises.length; i--){
        const filePath = path.join(process.cwd(), folderName, `${spriteNames[i].png}`)
        await saveImageFile(filePath, spritePromises[i])
        console.log(`Saved: ${filePath}`)
    }
}


savePokemonSprites("mew", pokemonObject.sprites);


//createFolder("test")