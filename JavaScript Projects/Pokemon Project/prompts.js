import fetch from "node-fetch";
import inquirer from "inquirer";
// import { parseOptions } from "./saving.js";

const questions = [
    {
        type: 'input',
        name: 'pokemon_name',
        message: "Enter the name of a Pokemon you are interested in?",
    }
]


const promptForPokemon = async () =>{
    return await inquirer.prompt({
        type: 'input',
        name: 'pokemon_name',
        message: "Enter the name of a Pokemon you are interested in?",
    });

};



// checkbox code

const promptForDownloadInfo = async () => {
    return await inquirer.prompt([{
        type: 'checkbox',
        name: 'options',
        message: 'Pokemon info to download: ',
        choices: [
            new inquirer.Separator("-- Options --"),
            {
                name: "Stats",
            },
            {
                name: "Sprites",
            },
            {
                name: "Artwork",
            },
        ],

    }]);
};


const userResponseDisplay = async () => {

    const userSelection = await promptForPokemon();
    const userOptionSelection = await promptForDownloadInfo();
    console.log(`You selected: ${userSelection.pokemon_name}`);
    console.log(`The options you selected were: ${userOptionSelection.options}`)

}



userResponseDisplay();