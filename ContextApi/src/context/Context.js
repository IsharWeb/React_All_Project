import { useContext , createContext } from "react";

export const ThemeContext = createContext({
    
    themeMode:'light',
    darkTheme: () => {},
    lightTheme: () => {},

});

export const ThemeProvider = ThemeContext.Provider;

export default function useThem() {
    return useContext(ThemeContext)
}