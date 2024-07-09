import './Form.css'

export default function Form() {
    return(
        <div className="divClass">
            <form className='formClass'> 
                <h3>Requsting a form</h3>
                <hr style={{ width: "100%"}}></hr>

                <label>Name:</label>
                <input />

                <label>Phone Number:</label>
                <input />

                <label>Age:</label>
                <input />

                <label>Are you an employee:</label>
                <input type="checkbox"/>

                <label>Salary</label>
                <select style={{ width: "90%", height: "25px"}}>
                    <option>less than 500$</option>
                    <option>between 500$ and 2000</option>
                    <option>above 2000</option>
                </select>
                <button id="formButton">Submit</button>
            </form>
        </div>
    )
}