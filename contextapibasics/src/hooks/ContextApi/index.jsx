import { createContext } from "react";

//step 1 => sbse phle hum context create krte h createcontext ka use krke 
//create context ek context component provie krta hai mtlb ab ye BioContext ek component hai jaise ki div p etc na ki koi  variable. 
// jab bhi hum ye component create krte hai to make sure ki iska first letter bda hi hona chahiye
export const BioContext = createContext()


//step 2=> ab hume ek porvider componet create krna pdta hai is component me hum data pass krte h or jo value hum isme pass krte hai uss value ko hi children access kr skte hai 
//agar value ek se jyada hai jase name=... and age = ... toh wo {{ }} double braces me aaye gi
//arrow function me childrens ko bhi accept krna pdta h ye childrens wo hote h jin components me hume ye values use krni pdti ho matlb jse agr hum main.jsx me Home dashboard provider me likh rhe h to wo components yaha children me rhe ge

//ab jitna bhi same data hum use krna chahte hai different components me uss data ko hume yaha bioprovider me define krna hota hai 
//ye ek store bn gya ab hum jisko chahe usko bhj skte h data ko
export const BioProvider = ({children}) =>{
    const name = "dheeraj saini"
    const myage = 30
//ab hum ye provider create krr rhe h iska syntax yhi hota h isme humko props pass krne pdte hai jab tk ye props na pass kro to children ko value accessable ni hoti 
   return <BioContext.Provider value={{name, myage}} > 
           {children}
   </BioContext.Provider>
}
