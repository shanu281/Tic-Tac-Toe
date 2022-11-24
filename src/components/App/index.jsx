import react from "react";
import Board from "../Board";
import "./style.css"
class App extends react.Component {
    constructor(props) {
        super(props)


    }

    render() {
        return (
            <>
                <center>
                    <h1>TIC-TAC-TOE</h1>
                    <Board />
                </center>
            </>
        )
    }
}
export default App
