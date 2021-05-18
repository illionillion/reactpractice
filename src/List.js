const LANGUAGES=[
  'JavaScript',
  'PHP',
  'VBA'
];

export const List = () => {
  // const title = props.title;
  
  return(
    <div>
      {/* <h4 style={{color:'green',background:'yellow'}}>{title}</h4> */}
      {
      
          LANGUAGES.map((string,number)=>{
            return   <ul><li><div key={number} style={{color:'green',background:'yellow'}}>{string}</div></li></ul>
          })
        
          
      }
    </div>
  )
}