import { writable } from 'svelte/store';

export const links = writable([]);
export const newUser = writable(false);
export const newLinks = writable(false);
export const settings = writable([]);
