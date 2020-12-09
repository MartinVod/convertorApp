import React from 'react'
import './History.css'
export default function History(props) {



const showHis = (history,ind) =>{
    return(
        <div className='container hisCon'>
            <div className='row'>
                <div className='col-md 8'>
                    <p>#{history.id}</p>
                    <hr />
                    <p>{history.desc}</p>
                    <hr />
                    <p>{history.result}</p>
                </div>
                <div className="col-md-4">
                   <button className="btn btn-danger" onClick={(e)=>{props.deleteHis(e,ind)}}>X</button>
                </div>
            </div>
        </div>
    )
}


    return (
        <div>
            {props.exHistory.map(showHis)}
        </div>
    )
}
