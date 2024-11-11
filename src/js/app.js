// TODO: write your code here
import GameSavingLoader from './GameSavingLoader.js';

console.log('Работает');

GameSavingLoader.load();


GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving

  }, (error) => {
    // ...
  });