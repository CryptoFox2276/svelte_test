import { writable } from "svelte/store";

export const memory = writable([]);
export const step = writable(1);