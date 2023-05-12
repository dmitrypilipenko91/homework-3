function HashStorageFunc( key,value ) {
  const self = this;
  const privStorage = {};
  self.addValue = function( key,value ) {
    privStorage[key] = value;
  }
  self.getValue = function( key ) {
    return privStorage[key];
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
  let drinkName = prompt( "Введите название напитка" );
  let drinkAlc = prompt( "Алкогольный" );
  let drinkRecipe = prompt( "Рецепт" );
  drinkStorage.addValue ( drinkName, { "Алкогольный": drinkAlc, "Рецепт": drinkRecipe } );
  alert( "Информация о напитке добавлена!" );
}
function getInfo() {
  let drinkName = prompt( "Введите название напитка" );
  let drinkInfo = drinkStorage.getValue( drinkName );
  if (drinkInfo) {
    for (let k in drinkInfo) {
      alert( "Напиток: " + drinkName + "\n"
                + k + ": " + drinkInfo[k] );
    }
  }
  else alert( 'Нет информации о напитке' );
}
function deleteInfo() {
  let drinkName = prompt( "Введите название напитка" );
  let result = drinkStorage.deleteValue( drinkName );
  if (result) 
    alert( "Информация удалена!" );
  else alert( "Напиток не найден!" );
}
function getList() {
  alert( drinkStorage.getKeys() );
}
