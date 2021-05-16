export const List = (props) => {
  const title = props.title;
  
  return(
    <div>
      <h4 style={{color:'green',background:'yellow'}}>{title}</h4>
      <div>リストです。</div>
    </div>
  )
}