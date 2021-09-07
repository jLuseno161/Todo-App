import React from "react"
import ReactDOM from "react-dom"
//component file
import TodoContainer from "./components/TodoContainer"

//React provides for us the StrictMode to activate checks and logs a warning message at runtime.
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,
    document.getElementById("root")
)