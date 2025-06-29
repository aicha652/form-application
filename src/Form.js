import './Form.css'
import Modal from './Modal'
import MyComponent from "./MyComponent"
import { useState } from "react"
import { LoanInputContext } from './contexts/LoanFormInputContext'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContext'

export default function Form() {
    const useData = useContext(UserContext)
    const [errorMssage, setErrorMessage] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const initialName = useData.name
    const [form, setForm] = useState({name: initialName, phone: "", age: "", employee: false, salary: ""})
    function Name(event) {
        setForm({...form, name: event.target.value})
    }

    function Phone(event) {
        setForm({...form, phone: event.target.value})
    }

    function Age(event) {
        setForm({...form, age: event.target.value})
    }

    function Employee(event) {
        setForm({...form, employee: event.target.checked})
    }

    function Salary(event) {
        setForm({...form, salary: event.target.value})
    }

    const btnIsDisabled = form.name === "" || form.phone === "" || form.age === "" || form.employee === false || form.salary === ""
    
    function handleFormClick() {
        if(form.age < 18 || form.age > 100){
            setErrorMessage("The Age is not Allowed")
        }
        else if(form.phone.length < 10 || form.phone.length > 12){
            setErrorMessage("The phone number format is Incorrect")
        }
        else{
            setErrorMessage(null)
        }
        setShowModal(true)
    }

    function handleDivClass() {
        if(showModal){
          setShowModal(false)
        }
    }
    return(
        <div onClick={handleDivClass} className="divClass">
            <h1 style={{ color: "white" }}>Hello {useData.name}</h1>
            <form 
               onSubmit={(event) => {
                  event.preventDefault()
               }}
               className='formClass'> 
                <h3>Requsting a form</h3>
                <hr style={{ width: "100%"}}></hr>

                {/*<label>Name:</label>
                <input value={form.name} onChange={Name}/>*/}

                <LoanInputContext.Provider
                  value={{ 
                    value: form.name,
                    handleChange: Name,
                    labelTitle: "name"
                 }}
                >
                    <MyComponent />
                </LoanInputContext.Provider>


                <LoanInputContext.Provider
                  value={{ 
                    value: form.phone,
                    handleChange: Phone,
                    labelTitle: "Phone Number"
                 }}
                >
                    <MyComponent/>
                </LoanInputContext.Provider>
                

                <LoanInputContext.Provider
                 value={{
                    value: form.age,
                    handleChange: Age,
                    labelTitle: "Age"
                 }}
                >
                    <MyComponent />
                </LoanInputContext.Provider>
                
                {/*<MyComponent 
                 inputName="Age:"
                 valueComponent={form.age}
                 handleChangeComponent={Age}
                 />*/}

                {/*<label>Phone Number:</label>
                <input value={form.phone} onChange={Phone}/>
                */}

                {/*<label>Age:</label>
                <input value={form.age} onChange={Age}/>*/}

                <label>Are you an employee:</label>
                <input type="checkbox" checked={form.employee} onChange={Employee}/>

                <label>Salary</label>
                <select value={form.salary} onChange={Salary} style={{ width: "100%", height: "25px"}}>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000</option>
                </select>
                <button
                   onClick={handleFormClick}
                   className={btnIsDisabled ? "disable" : ""} 
                   disabled={btnIsDisabled} 
                   id="formButton"
                >
                    Submit
                </button>
            </form>
            <Modal errorMessage={errorMssage} isVisible={showModal}/>
        </div>
    )
}