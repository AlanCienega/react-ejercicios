// como paramentro se reciben los props, props.elements
function ListView({elements, functionItemsFilter}) {
  return(
    <>
    <input type="search" placeholder="Buscar ..." onChange={ev => functionItemsFilter(ev.target.value)}/>
    <ul>
      {elements.map((name, index) => name && <li key={index}>{name}</li> )}
    </ul>
    </>
  )
}
export default ListView;