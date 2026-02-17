import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light", //yaha pr hum by default variable and empty methods set kr rhe h Doubt:why?
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider


//ye humne ek custom hook bna diya ab hume useContext ko baar baar import ni krna pde ga direct useTheme ko import kr skte h ab hume upr ThemeContext me se agr kisi bhi value ka access chahiye hoga to hum useTheme import krke usko access kr lenge 
export default function useTheme(){
    return useContext(ThemeContext)
}