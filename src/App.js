import React,{useState} from 'react'
import {HashRouter as Router,Switch , Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './components/Main'
import Header from './components/Header'
import Nav from './components/Nav'
import Update from './components/Update'
import History from './components/History'


import './App.css';

function App() {

  const [curency, setCurency] = useState([{name: 'dollar',valu: 4},{name: 'euro',valu: 5},{name: 'shekel',valu: 1}]);
  const [exHistory, setExHistory] = useState([{id: 1,desc:'from dollar to shekel',result: '1=4'}]);
  const [showHistory, setShowHistory] = useState({onlod: false, afterUpdate: false});

  const deleteHis = (e,index)=>{
    let newHis = exHistory;
    newHis.splice(index,1);
    setExHistory(newHis);
    alert('delete completed succesfuly');
    setShowHistory({onlod: false, afterUpdate: true,});
}

const doExchange = (from,to,amount) =>{
  let rate = from.val/to.val;
  rate = rate*amount;
  let line1='from '+from.name+' to '+to.name+'.';
  let line2=(from.val).toString()+'='+(to.val).toString();
  let newHistory = {id: exHistory.length+1, desc: line1, result: line2};
  setExHistory([...exHistory,newHistory]);
  alert('the exchange rate is: '+rate);
}

const addCur = (name,val) =>{
  let newCur = {name: name, valu: val}
  let newCurArr = curency;
  let updated = false;
  for(let i=0;i<curency.length;i++){
    if(newCur.name === curency[i].name){
      newCurArr.splice(i,1,newCur);
      setCurency(newCurArr);
      updated = true;
      alert("currency updated")
      break;
    }
  }
  if(!updated){
    newCurArr.push(newCur);
    setCurency(newCurArr);
    alert('currency added');
  }
}




  return (
    <div className="App container">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={()=><Main curency={curency} exHistory={exHistory} doExchange={doExchange} />} />
          <Route exact path='/update' component={()=><Update  curency={curency} addCur={addCur} />} />
        </Switch>
        <Nav setShowHistory={setShowHistory} showHistory={showHistory}/>
        {showHistory.afterUpdate && setShowHistory({onlod: true, afterUpdate: false})}
        {showHistory.onlod ? <History exHistory={exHistory} deleteHis={deleteHis}/> : null}
      </Router>
    </div>
  );
}

export default App;
