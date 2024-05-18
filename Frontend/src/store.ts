import { create } from "zustand";

interface BearState {
  userId: number;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: 0 | 1;
  setUserId: (id: number) => void;
}

export const useUserData = create<BearState>()((set) => ({
  userId: 3,
  fullName: "Claire Martin",
  email: "exemple@gmail.com",
  phoneNumber: "0779223311",
  role: 1,
  setUserId: (id) => set(() => ({ userId: id })),
}));
