import react from "react"
import "./style.css"
class Board extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlayer: 'X',
            boxes: ["", "", "", "", "", "", "", "", ""]
        }
    }

    handleClick = (i) => {
        let newBoxes = [...this.state.boxes]
        newBoxes[i] = this.state.currentPlayer
        this.setState({
            currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
            boxes: newBoxes
        })
    }

    render() {
        return (
            <>
                <div className="board flex" >

                    <div className="box-container flex">
                        {
                            this.state.boxes.map((box, i) =>
                                <div onClick={() => this.handleClick(i)} className="box">{box}</div>
                            )
                        }
                    </div>
                    <div className="board-details">
                        <h2  >Next Player : {this.state.currentPlayer}</h2>
                    </div>
                </div>
            </>
        )
    }
}
export default Board