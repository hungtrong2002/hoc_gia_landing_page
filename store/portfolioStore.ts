import { create } from 'zustand';

interface PortfolioState {
  type: string;
  status: string;
  setType: (type: string) => void;
  setStatus: (status: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  type: '',
  status: '',
  setType: (type) => set({ type }),
  setStatus: (status) => set({ status }),
}));
