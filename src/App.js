// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import {List} from './List';
import {Form} from './form';

function App() {
  // const [description,setDescription]=useState('クリック前の表示');
  const [tab,setTab]=useState('list');
  // const changeDescription=()=>{
  //   setDescription('クリック後の表示です、');
  // }
  const body=tab==='list' ?  <List title="取扱言語一覧"/>: <Form/>;
  return (
    <div style={{color:'red',background:'blue'}}>
      {/* ゼロから始めるReact入門 */}
      <header>
        <ul>
          <li onClick={()=>setTab('list')}>リスト</li>
          <li onClick={()=>setTab('form')}>フォーム</li>
        </ul>
      </header>
      <hr/>
      {/* {description} */}
      {body}
      {/* <button onClick={()=>changeDescription()}>ボタン</button> */}
    </div>
  );
}

export default App;
