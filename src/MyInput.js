import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";
import { UserContext } from "./contexts/UserContext";

export default function MyInput() {
    const userData = useContext(UserContext)
    const inputContext = useContext(LoanInputContext)
    return(
        <div>
            <label>{userData.name} { inputContext.labelTitle }</label>
            <input 
             value={inputContext.value} 
             onChange={inputContext.handleChange}/>
        </div>
    )
}