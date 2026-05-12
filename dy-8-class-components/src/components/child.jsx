import { Component } from "react"

class Child extends Component {
    
    constructor(props){
        super(props)
        this.state={
            name:props.name
        }
    }
    componentDidMount(){
        alert('Component Mount')
        console.log('Component Mount');
        
    }
    handelChange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }

    render() {
        return (
            <>
                <h2>Hello From {this.state.name}</h2>
                <input type="text" value={this.state.name} onChange={this.handelChange} />
            </>
        )
    }
}
export default Child