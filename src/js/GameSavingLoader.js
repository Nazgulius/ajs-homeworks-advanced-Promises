export default class GameSavingLoader {
    static load() {
      return new Promise(function(resolve) {
        const data = read();
        const value = json(data);

        resolve(JSON.parse(value));
        //JSON.parse
      })
    }
  }