import { createContext , useState} from "react";

export const theme = createContext();

export const ThemeProvider = ({children})=>{
   const [darkMode ,setDarkMode] = useState(false);

   const toggleTheme = ()=>{
    setDarkMode(prev=>!prev);
   };

   return (
    <theme.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </theme.Provider>
  );
}