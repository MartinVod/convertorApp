import React from 'react'
import {Link} from 'react-router-dom';
import './Nav.css'

export default function Nav(props) {
    return (
        <div>
            <Link to='/update'><button className='btn btn-primary btn-lg'>Update</button></Link>
            <a href='http://facebook.com' target='blank'><button className='btn btn-primary btn-lg'>share on facebook</button></a>
            <button className='btn btn-primary btn-lg' onClick={()=>{props.showHistory ? props.setShowHistory({onlod: true, afterUpdate: false}) : props.setShowHistory({onlod: false, afterUpdate: false})}}>Toggle your exchange list</button>
        </div>
    )
}
