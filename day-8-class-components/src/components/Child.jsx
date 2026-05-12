

import { Component } from "react"

class Child extends Component {
    componentWillUnmount() {
        console.log("Component Unmount...")
    }

    render() {
        return (
            <>
                <h2>Hello from children</h2>
            </>
        )
    }
}

export default Child