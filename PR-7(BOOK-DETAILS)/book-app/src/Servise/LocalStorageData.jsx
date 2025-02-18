export const getOldStorage = () => {
    return JSON.parse(localStorage.getItem('products')) || []
  }

  export const setLocalStorageData = (data) => {
    localStorage.setItem('products', JSON.stringify(data));
  }