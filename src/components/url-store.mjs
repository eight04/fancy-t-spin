/* eslint-env browser */
import {writable} from "svelte/store";

export const hashValue = process.env.componentType === "server" ? writable("") : createWritable();

function getHashValue() {
  return location.hash.replace(/^#/, "");
}

function createWritable() {
  const listeners = new Set;
  let value = getHashValue();

  window.addEventListener("hashchange", () => {
    const newValue = getHashValue();
    if (newValue !== value) {
      value = newValue;
      emit();
    }
  });

  return {
    subscribe(callback) {
      listeners.add(callback);
      emit();
      return () => listeners.delete(callback);
    },
    set(newValue) {
      history.pushState({}, '', `#${newValue}`);
      try {
        document.getElementById(newValue).scrollIntoView({behavior: "smooth"});
      } catch (err) {
        console.warn(err);
      }
      value = newValue;
      emit();
    }
  };

  function emit() {
    for (const cb of listeners) {
      cb(value);
    }
  }
}
