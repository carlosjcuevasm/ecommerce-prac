export function storageAvailable(type) {
  
  var storage;
  try {
      storage = window[type];
      var x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      
      return true;
  }
  catch(e) {
      console.log(e.name, e.message)
      return false;
  }
}