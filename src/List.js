const LANGUAGES=[
  'JavaScript',
  'PHP',
  'VBA',
  'React.js'
];

export const List = () => {
  // const title = props.title;
  
  return(
    <div>
      <ul>
        
        {/* <h4 style={{color:'green',background:'yellow'}}>{title}</h4> */}
        {
        
            LANGUAGES.map((string,number)=>{
              return   <li><div key={number} style={{color:'green',background:'yellow',border:'1px solid black'}}>{string}</div></li>
            })
        
        
        }
      </ul>
    </div>
  )
}