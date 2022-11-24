import react from "react"
import "./style.css"
class Board extends react.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPlayer: 'X',
            boxes: ["", "", "", "", "", "", "", "", ""],
            history: [],
            winner: "",
        }
    }

    handleClick = (i) => {
        if (this.state.boxes[i] || this.state.winner) {
            return
        }
        let newBoxes = [...this.state.boxes]
        newBoxes[i] = this.state.currentPlayer
        let newWinner = this.calculateWinner(newBoxes)
        this.setState({
            currentPlayer: this.state.currentPlayer === "X" ? "O" : "X",
            boxes: newBoxes,
            winner: newWinner,
            history: this.state.history.concat([newBoxes])
        })
        console.log(newBoxes)
        console.log(newWinner)
        console.log(this.state.history)
    }
    handleReset = () => {
        this.setState({
            currentPlayer: "X",
            boxes: ["", "", "", "", "", "", "", "", ""],
            history: []
        })
    }
    handleStep = (i) => {
        this.setState({
            boxes: this.state.history[i]
        })
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
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
                        <button onClick={this.handleReset}>Reset </button>
                    </div>
                    <div className="board-details">
                        <h2 className={this.state.winner === null || this.state.winner === "" ? "show" : "hide"} >Next Player : {this.state.currentPlayer}</h2>
                        <h1 className={this.state.winner === null || this.state.winner === "" ? "hide" : "show"}>Winner is : {this.state.winner}</h1>
                        {
                            this.state.history.map((elm, i) =>
                                <button onClick={() => this.handleStep(i)} className="sec-btn">Go to step {i + 1}</button>
                            )
                        }
                    </div>
                </div>
            </>
        )
    }
}
export default Board