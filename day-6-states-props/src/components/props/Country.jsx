import state from "../props/state"

const Country = ({props}) => {


  return (
   <>
    <h2>Hello from {props.country}</h2>
    <h2>{state=props.state },{city=props.city}</h2>
   </>
  )
}

export default Country
