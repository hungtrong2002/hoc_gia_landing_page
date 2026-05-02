import { create } from 'zustand';

interface BlogState {
  activeTocId: string;
  setActiveTocId: (id: string) => void;
}

export const useBlogStore = create<BlogState>((set) => ({
  activeTocId: '',
  setActiveTocId: (activeTocId) => set({ activeTocId }),
}));
