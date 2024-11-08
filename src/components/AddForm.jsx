import { useState } from "react"

export default function AddForm() {
    const [task,setTask] = useState("");

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(task);
    }


    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text"onChnage={(e) => setTask(e.target.value)}></input>
            <button>add</button>
        </form>    
        </>
    )
}