import { create } from 'zustand';

export const useFavoriteStore = create((set) => ({
  favorites: [],
  
  addFavorite: (character) => 
    set((state) => {
      const exists = state.favorites.some((fav) => fav.id === character.id);
      if (exists) return state; 
      return { favorites: [...state.favorites, character] };
    }),

  removeFavorite: (id) => 
    set((state) => ({
      favorites: state.favorites.filter((char) => char.id !== id),
    })),
}));