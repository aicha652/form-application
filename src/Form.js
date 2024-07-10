import './Form.css'
import { useState } from "react"

export default function Form() {
    const [form, setForm] = useState({name: "", phone: "", age: "", employee: false, salary: ""})
    function Name(event) {
        return(
            setForm({...form, name: event.target.value})
        )
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
    
    return(
        <div className="divClass">
            <form 
               onSubmit={(event) => {
                  event.preventDefault()
               }}
               className='formClass'> 
                <h3>Requsting a form</h3>
                <hr style={{ width: "100%"}}></hr>

                <label>Name:</label>
                <input value={form.name} onChange={Name}/>

                <label>Phone Number:</label>
                <input value={form.phone} onChange={Phone}/>

                <label>Age:</label>
                <input value={form.age} onChange={Age}/>

                <label>Are you an employee:</label>
                <input type="checkbox" checked={form.employee} onChange={Employee}/>

                <label>Salary</label>
                <select value={form.salary} onChange={Salary} style={{ width: "100%", height: "25px"}}>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000</option>
                </select>
                <button
                   className={btnIsDisabled ? "disable" : ""} 
                   disabled={btnIsDisabled} 
                   id="formButton"
                >
                    Submit
                </button>
            </form>
            {/*<Modal />*/}
        </div>
    )
}