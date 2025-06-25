export default function MyComponent({inputName, value, handleChange}) {
    return(
    <>
        <label>{ inputName }</label>
        <input 
         value={value} 
         onChange={handleChange}/>
    </>
    )
}