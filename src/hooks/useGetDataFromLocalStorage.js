const useGetDataFromLocalStorage = (keyName = "") => {
  const data = JSON.parse(localStorage.getItem(keyName));
  if (data) {
    return data;
  }
  return [];
};
export default useGetDataFromLocalStorage;
