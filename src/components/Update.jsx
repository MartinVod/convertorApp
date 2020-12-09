import React,{useState} from 'react'
import {Link} from 'react-router-dom';

export default function Update(props) {

    const [curName, setCurName] = useState();
    const [curValu, setCurvalu] = useState();

    const updateCurName = (e) =>{
        setCurName(e.target.value);
    }

    const updateCurValu = (e)=>{
        setCurvalu(e.target.value);
    }

    const showCur = (cur) =>{
        return (
            <tr>
                <td>{cur.name}</td>
                <td>{cur.valu}</td>
            </tr>
        )
    }
    return (
        <div className='container'>
            <div className='row'>
                <table class="table table-sm table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Type</th>
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.curency.map(showCur)}
                    </tbody>
                </table>
            </div>
            <div className="row form-inline">
                <span>Type: </span><input type="text" className="form-control" onChange={updateCurName}/>
                <br />
                <span>New Value: </span><input type="text" className="form-control" onChange={updateCurValu}/>
                <br />
                
            </div>
            <Link to='/'><button className="btn btn-primary">Back</button></Link>
            <Link to='/update'><button className="btn btn-primary" onClick={()=>{props.addCur(curName,curValu)}}>Submit</button></Link>
        </div>
    )
}
