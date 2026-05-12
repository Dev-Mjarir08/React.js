// App.jsx

import { Component } from "react"
import Child from "./components/Child"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      count1: 0,
      toggle: true
    }
  }

  componentDidMount() {
    console.log("component mount");

  }

  componentDidUpdate() {
    console.log('componenet Updated');

  }

  render() {

    console.log("render..")

    return (
      <>
        <h4>count: {this.state.count}</h4>

        <button
          type="button"
          onClick={() =>
            this.setState({
              count: this.state.count + 1
            })
          }
        >
          count++
        </button>
        {" "}
        <button
          type="button"
          onClick={() =>
            this.setState({
              toggle: !this.state.toggle
            })
          }
        >
          Toggle
        </button>

        {
          this.state.toggle && <Child />
        }
      </>
    )
  }
}

export default App