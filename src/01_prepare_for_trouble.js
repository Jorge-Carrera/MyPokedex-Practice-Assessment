/*
  Do not change the line below. If you'd like to run code from this file, you may use the `examplePokemon` variable below to gain access to an array of Pokemon.
  Keep in mind that your functions must still have and use a parameter for accepting all Pokemon.
*/
const examplePokemon = require("../data/poke");
// Do not change the line above.

/**
 * getAllPokemonNames()
 * -----------------------------
 * Returns all Pokemon names from an array of Pokemon. If the inputted `pokemon` array is empty, return `[]`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are Pokemon names.
 *
 * EXAMPLE:
 *  getAllPokemonNames(pokemon);
 *  //> [
  'Bulbasaur',  'Ivysaur',    'Venusaur',   'Charmander', 'Charmeleon',
  'Charizard',  'Squirtle',   'Wartortle',  'Blastoise',  'Caterpie',
  'Weedle',     'Pidgey',     'Pidgeotto',  'Pidgeot',    'Spearow',
  'Fearow',     'Arbok',      'Pikachu',    'Raichu',     'Sandshrew',
  'Sandslash',  'Clefairy',   'Clefable',   'Vulpix',     'Ninetales',
  'Jigglypuff', 'Wigglytuff', 'Paras',      'Parasect',   'Venonat',
  'Venomoth',   'Diglett',    'Dugtrio',    'Meowth',     'Persian',
  'Psyduck',    'Golduck',    'Mankey',     'Primeape',   'Growlithe',
  'Arcanine',   'Poliwag',    'Poliwhirl',  'Poliwrath',  'Abra',
  'Kadabra',    'Alakazam',   'Bellsprout', 'Weepinbell', 'Victreebel',
  'Geodude',    'Graveler',   'Golem',      'Slowpoke',   'Slowbro',
  'Shellder',   'Cloyster',   'Gastly',     'Haunter',    'Onix',
  'Drowzee',    'Hypno',      'Krabby',     'Kingler',    'Voltorb',
  'Electrode',  'Exeggcute',  'Exeggutor',  'Cubone',     'Marowak',
  'Hitmonlee',  'Hitmonchan', 'Koffing',    'Weezing',    'Chansey',
  'Tangela',    'Horsea',     'Goldeen',    'Seaking',    'Staryu',
  'Starmie',    'Mr. Mime',   'Scyther',    'Jynx',       'Pinsir',
  'Tauros',     'Magikarp',   'Gyarados',   'Lapras',     'Ditto',
  'Porygon',    'Snorlax',    'Articuno',   'Zapdos',     'Moltres',
  'Dratini',    'Dragonair',  'Dragonite',  'Mewtwo'
];
 */
function getAllPokemonNames(pokemon) {
let pokedex = [];
   
  for (let i = 0; i < pokemon.length; i ++){
    if (pokemon.length === 0){
      return pokedex;
    }else{
      pokedex.push(pokemon[i].name)
    }
  }
 
 return pokedex;
 
};

/**
 * getHighestAttackStatScore()
 * -----------------------------
 * Returns the highest `attack` stat score among all Pokemon. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The highest `attack` stat of all Pokemon.
 *
 * EXAMPLE:
 *  getHighestAttackStatScore(pokemon);
 *  //> 134
 */
 function getHighestAttackStatScore(pokemon) {
  let highestAttack = pokemon[0];
  let attackScore = 0; 
  
  
  for (let i = 0; i < pokemon.length; i ++){
    if (pokemon.length === 0){
      return attackScore ;
    }else{
      for (let j = 0; j < pokemon[i].stats.length; j ++){
        if (highestAttack.stats[j].category === 'attack'){
          if (highestAttack.stats[j].value < pokemon[i].stats[j].value){
            highestAttack = pokemon[i];
            attackScore = highestAttack.stats[j].value;
          }
        }
      }
    }
  }
    return attackScore;
  };

/**
 * getAverageTotalStatScore()
 * -----------------------------
 * Averages all of the `total` stat scores from all Pokemon and returns it, as a number. If the inputted `pokemon` array is empty, return `0`.
 * @param {Object[]} pokemon - An array of Pokemon. See the `poke.js` file for an example of this array.
 * @returns {number} The average `total` stat across all Pokemon.
 *
 * EXAMPLE:
 *  getAverageTotalStatScore(pokemon);
 *  //> 407.22
 */
function getAverageTotalStatScore(pokemon) {
  let statTotal = 0;
  let totalAvg = 0;
  
  
  for (let i = 0; i < pokemon.length; i ++){
    if (pokemon.length === 0){
      return totalAvg;
    }else {
      for (let j = 0; j < pokemon[i].stats.length; j ++){
        if (pokemon[i].stats[j].category === 'total'){
          statTotal += (pokemon[i].stats[j].value)
          totalAvg = Number((statTotal / pokemon.length).toFixed(2))
        }
      }
    }
  }
    return totalAvg
  }


module.exports = {
    getAllPokemonNames,
    getHighestAttackStatScore,
    getAverageTotalStatScore
};