import {create} from 'zustand';
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if(isDarkMode && !localStorage.getItem('theme')){
    localStorage.setItem("theme","dark")
}
else if(!localStorage.getItem('theme')){
    localStorage.setItem("theme","light")
}
const useStore = create((set) => ({
  text: localStorage.getItem("theme"), // Initial empty string
  setText: (newText) => set({ text: newText }), // Action to set the text
}));

export default useStore;
