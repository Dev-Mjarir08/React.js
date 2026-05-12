import { Component } from "react";
import Child from "./components/child";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
    this.handelCounter=this.handelCounter.bind(this)

  }
  handelCounter() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <h2>helloo react developers</h2>
        <h4>count: {this.state.count}</h4>
        <button type="button" onClick={this.handelCounter}>+</button>
        <Child name="Jarir"/>
      </>
    )
  }
}
export default App