import City from '../props/City'

const state = (props) => {
  return (
 <>
    <h2>Hello from {props.State}</h2>
    <h2>{state=props.state },{city=props.city}</h2>
   </>
  )
}

export default state
