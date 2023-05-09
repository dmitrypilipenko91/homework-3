function HashStorageFunc( key,value ) {
    const self = this;
    const privStorage = {};
    self.addValue = function( key,value ) {
      privStorage.key = value;
    }
    self.getValue = function( key ) {
      return privStorage.key;
    }
    self.deleteValue = function( key ) {
      if ( key in privStorage ) {
        delete privStorage[key];
        return true;
      }
      return false;
    }
    self.getKeys = function() {
      return Object.keys( privStorage );
    }
  }
  
  const drinkStorage = new HashStorageFunc ( );
  
  function addInfo() {
    let userDrinkName = prompt( "Введите название напитка" );
    let userDrinkAlc = prompt( "Алкогольный" );
    let userDrinkRecipe = prompt( "Рецепт" );
    drinkStorage.addValue ( userDrinkName, { "Алкогольный": userDrinkAlc, "Рецепт": userDrinkRecipe } );
    alert( "Информация о напитке добавлена!" );
  }
  function getInfo() {
    let userDrinkName = prompt( "Введите название напитка" );
    let drinkInfo = drinkStorage.getValue( userDrinkName );
    if (drinkInfo) {
      for (let k in drinkInfo) {
        alert( "Напиток: " + userDrinkName + "\n"
                  + k + ": " + drinkInfo[k] );
      }
    }
    else alert( 'Нет информации о напитке' );
  }
  function deleteInfo() {
    let userDrinkName = prompt( "Введите название напитка" );
    let result = drinkStorage.deleteValue( userDrinkName );
    if (result) 
      alert( "Информация удалена!" );
    else alert( "Напиток не найден!" );
  }
  function getList() {
    alert( drinkStorage.getKeys() );
  }
  