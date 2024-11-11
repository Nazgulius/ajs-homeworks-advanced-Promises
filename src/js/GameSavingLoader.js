export default class GameSavingLoader {
    static load() {
      return new Promise(function(resolve, reject) {
        
        then((resolve) => {
          resolve = read();
        })
        .then((resolve) => {
          const value = json(resolve);
          return value;
        })
        .cath(error => {
          console.log(error)
        })
      })
    }
  }