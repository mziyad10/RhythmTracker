import { createContext, useContext } from "react";
import { ID, Models } from "react-native-appwrite";
import { account } from "./appwrite";

const AuthContextType = {
    // user: Models.User<Models.Preferences> | null;
    // isLoadingUser: boolean;
    signUp: (email: string, password: string) => Promise<string | null>;
    signIn: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}:{children:React.ReactNode}){

    const signUp = async(email: string, password: string)=>{
        try {
            await account.create(ID.unique(),email, password)
            await signIn(email, password)
            return null
        } catch (error) {
            if(error instanceof Error){
                return error.message
            }
            return "An error occured during signUp"
        }
    }

    const signIn = async(email: string, password: string)=>{
        try {
            await account.createEmailPasswordSession(email, password)
            return null
        } catch (error) {
            if(error instanceof Error){
                return error.message
            }
            return "An error occured during signIn"
        }
    }

return <AuthContext.Provider value={{ signUp, signIn}}>
    {children}
</AuthContext.Provider>
}

export function useAuth(){
    const context = useContext(AuthContext)
}