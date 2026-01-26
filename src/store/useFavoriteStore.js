import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
    favorites: [],
    loading: false,
    error: null,

    setFavorites: (favorites) => set({ favorites }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),

    addFavorite: (character) =>
    set((state) => ({
        favorites: [...state.favorites, character],
    })),

    removeFavorite: (id) =>
    set((state) => ({
        favorites: state.favorites.filter((char) => char.id !== id),
    })),
}));
