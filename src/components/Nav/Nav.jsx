import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div>
           <Link to='/'>BMI</Link>
           <Link to='/calculate'>Calculate</Link>
           <Link to='/transform'>Transform</Link>
        </div>
    )
}

export default Nav;
