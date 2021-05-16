import React from 'react';

export class List extends React.Component {
  // const title= props.title;
  render(){
    const {title}=this.props;
    return(
      <div>
        <p>{ title }</p>
        <div style={{color:'red'}}>リスト</div>
      </div>
      // <div>リスト</div>
    )    
  }

}