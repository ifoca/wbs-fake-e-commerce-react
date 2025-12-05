// write code to add / remove from the local storage

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('myCart')) || [];
};

export const addToLocalStorage = (newItem) => {
  const updatedLocalStorage = [...getLocalStorage(), newItem];
  localStorage.setItem('myCart', JSON.stringify(updatedLocalStorage));
};

export const removeFromLocalStorage = (oldItem) => {
  const updatedStorage = getLocalStorage().filter(({ id }) => id === oldItem);
  localStorage.setItem('myCart', JSON.stringify(updatedStorage));
};
