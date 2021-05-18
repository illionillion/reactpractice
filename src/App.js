// import logo from './logo.svg';
// import './App.css';
import {useState} from 'react';
import {List} from './List';
import {Form} from './form';
import {Test} from './form';

function App() {
  // const [description,setDescription]=useState('クリック前の表示');
  const [tab,setTab]=useState('list');

  const hoge='hogehoge';
  // const changeDescription=()=>{
  //   setDescription('クリック後の表示です、');
  // }
  const body=tab==='list' ?  <List title="取扱言語一覧"/>: <Form/>;
  // const test=<Test/>;
  return (
    <div style={{color:'red',background:'blue'}}>
      {/* ゼロから始めるReact入門 */}
      <header style={{color:'pink'}}>
        <ul>
          <li onClick={()=>setTab('list')}>リスト</li>
          <li onClick={()=>setTab('form')}>フォーム</li>
          {/* <li>{test}</li> */}
        </ul>
      </header>
      <hr/>
      {/* {description} */}
      {body}<br/>
      {hoge}
      {/* <button onClick={()=>changeDescription()}>ボタン</button> */}
    </div>
  );
}

export default App;
