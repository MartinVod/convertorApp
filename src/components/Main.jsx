import React,{useState} from 'react'

export default function Main(props) {

    const [to, setTo] = useState({});
    const [from,setFrom] = useState({});
    const [amount, setAmount] = useState(0);
    const [flagButton, setFlagButton] = useState(false);

    const showRates = (cur) =>{
        return(
          <option>{cur.name}</option>
        )
    }

    const getValueByName = (name) =>{
        for(let i=0; i<props.curency.length; i++){
            if(props.curency[i].name === name){
                return (props.curency[i].valu);
            }
        }
    }


    const changeTo = (e) =>{
        setTo({name: e.target.value, val: getValueByName(e.target.value)});
        document.getElementById('toSelect').className='form-control is-valid';
    }

    const changeFrom = (e) =>{
        setFrom({name: e.target.value, val: getValueByName(e.target.value)});
        document.getElementById('fromSelect').className='form-control is-valid';
    }

    const changeAmount = (e) =>{
        if(e.target.value.length >0){
            setFlagButton(true);
        }else{
            setFlagButton(false);
        } 
        setAmount(e.target.value);
    }

    const checkInputs = ()=>{
        if(to.value === 'type'){
            alert('Please select type');
            document.getElementById('toSelect').className='form-control is-invalid';
        }else if(from.value === 'type'){
            alert('Please select type');
            document.getElementById('fromSelect').className='form-control is-invalid';
        }else{
            props.doExchange(from,to,amount);
        }
    }



    return (
        <div>
        <div className='row form-inline'>
            <div className='col-md-6 '>
                <div className='row'>
                    <div className='col-md-4'>
                        <span className='form-text'>From: </span>
                        <span>To: </span>
                    </div>
                    <div className='col-md-8'>
                        <select id="fromSelect" className="form-control" style={{width: '60%'}} onChange={changeFrom}>
                            <option  disabled selected>type</option>
                            {props.curency.map(showRates)} 
                        </select>
                        <select id="toSelect" className="form-control"  style={{width: '60%'}} onChange={changeTo}>
                            <option  disabled selected>type</option>
                            {props.curency.map(showRates)}
                        </select>
                    </div>
                </div>
            </div>
            <div classname="form-group col-md-6">
                <input type='number' id='sumToEx' className='form-control' placeholder='Please enter number to exchange' onChange={changeAmount}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6" >
        
            </div>
            <div className="col-md-6">
                <button className={flagButton ? "btn btn-primary" : "btn btn-primary disabled"} onClick={checkInputs}>Start</button>
            </div>
        </div>
        </div>
    )
}
