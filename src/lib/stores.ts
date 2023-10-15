import { derived, writable } from "svelte/store";

const selectedCards = writable(0);

export const incrementNbrSelectedCards = () => {
    selectedCards.update(n=>n+1);
}

export const decrementNbrSelectedCards = () => {
    selectedCards.update(n=>n-1);
}

export const nbrSelectedCards = derived(
    [selectedCards],
    ([$selectedCards]) => $selectedCards
);

export const nbrCards = writable(0);