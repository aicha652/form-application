import { useContext } from "react";
import { LoanInputContext } from "./contexts/LoanFormInputContext";

export default function MyInput() {
    const inputContext = useContext(LoanInputContext)
    return(
        <div>
            <label>{ inputContext.labelTitle }</label>
            <input 
             value={inputContext.value} 
             onChange={inputContext.handleChange}/>
        </div>
    )
}