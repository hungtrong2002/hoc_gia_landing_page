import { create } from 'zustand';

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface ContactState {
  status: FormStatus;
  setStatus: (status: FormStatus) => void;
  reset: () => void;
}

export const useContactStore = create<ContactState>((set) => ({
  status: 'idle',
  setStatus: (status) => set({ status }),
  reset: () => set({ status: 'idle' }),
}));
