import React from 'react';

function useLocalStorage(itemName, initValue) {
    const [item, setItem] = React.useState(initValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false)
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try {
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItem;
          if (localStorageItems) {
            parsedItem = JSON.parse(localStorageItems);
          }else{
            localStorage.setItem(itemName, JSON.stringify(initValue))
            parsedItem = initValue;
          }
          setItem(parsedItem)
          setLoading(false);
        } catch (error) {
          setError(error);
        }
      }, 1000);
    });
  
    const saveItems = (newItems) => {
      try {
        const stringifiedItems = JSON.stringify(newItems);
        localStorage.setItem(itemName, stringifiedItems);
        setItem(newItems);
      } catch (error) {
        setError(error);      
      }
    };
  
    return {
      item,
      saveItems,
      loading,
      error
    };
}

export { useLocalStorage }