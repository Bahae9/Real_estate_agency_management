import { create } from "zustand";

interface BearState {
  userId: number;
  fullName: string;
  email: string;
  setUserId: (id: number) => void;
}

export const useUserData = create<BearState>()((set) => ({
  userId: 3,
  fullName: "Claire Martin",
  email: "exemple@gmail.com",
  setUserId: (id) => set(() => ({ userId: id })),
}));
