// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {List} from './list';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = { description: 'クリック前' }
  }

  changeDescription() {
    this.setState( {
      description:'クリック後'
    })
  }

  render(){
    const {description}=this.state;
    return(
      <div style={{color:'red',background:'blue'}}>
        {/* クラスコンポーネントにした */}
        {description}
        <List title="取扱言語一覧" />
        <button onClick={()=>this.changeDescription()}style={{color:'green',border:'25%',background:'yellow'}} >button</button>
      </div>
    )
  }
  
}

export default App;
