import { Store } from "./../types";
const key = "GHOSTs";

export const GetFromLocalStorage = () => {
  const store = window.localStorage.getItem(key) || "{}";
  return JSON.parse(store);
};

export const SetFromLocalStorage = (store: Store) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(store));
  } catch (error) {
    console.log("Cota excedida.");
  }
};

export const MergeInLocalStorage = (data: Store, path: string) => {
  const prevStorage = GetFromLocalStorage();
  SetFromLocalStorage({ ...prevStorage, [path]: data });
};
