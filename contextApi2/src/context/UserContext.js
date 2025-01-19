import { useContext, createContext } from "react";

export const ThemContext = createContext({
    themeMode: "dark",
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemContext.Provider;

export default function useThemeSwiture() {
    return useContext(ThemContext )
}
