import create from 'zustand';

interface profilePicState {
  isProfile: boolean;
  setIsProfile: (value: boolean) => void;
}

const userProfilePicState = create<profilePicState>((set) => ({
  isProfile: false,
  setIsProfile: (value) => set({ isProfile: value }),
}));

export default userProfilePicState;