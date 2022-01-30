import { logError } from "../../../common/utils";

// FOR LOCAL API's if needed
let storageAvailable = false;
try {
  storageAvailable = window.sessionStorage;
} catch (error) {
  logError("Session storage is not available", storageAvailable);
}

const Storage = storageAvailable && sessionStorage;

export const setStorageItem = async (key, value) => {
  storageAvailable && Storage.setItem(key, value);
};

export const getStorageItem = async (key) => {
  if (storageAvailable) {
    const value = Storage.getItem(key);
    return value;
  } else return null;
};

export const removeStorageItem = async (key) => {
  storageAvailable && Storage.removeItem(key);
};
