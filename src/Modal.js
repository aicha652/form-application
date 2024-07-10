export default function Modal({ isVisible, errorMessage=null }) {
    if (isVisible) {
        return(
            <div id="modal">
                <div id="modal-content"style={{ color: errorMessage != null ? "red" : "green" }}>
                    <h1>{errorMessage != null ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
                </div>
            </div>
        )
    }
    else {
        return <></>
    }
}