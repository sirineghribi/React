import { Link, NavLink } from "react-router-dom"

export default function Header(props) {
        console.log(props)
        const title=props.title;
        const id=1;
        return (
            <>
            <h1>header</h1>

            <NavLink to={`/events?name=${title}`} style={({isActive})=>{{textDecoration : isActive ? 'underline':'none'}}} >Event </NavLink>
            
            <Link to={`/events/${id}/${title}`}>Event Details</Link>
            
            <Link to="/products">Products</Link>
            
            <Link to="/counter">Counter</Link>
            </>
       ) 
}