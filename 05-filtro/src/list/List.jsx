import { useState } from "react";
import tecnologies from "./items";
import ListView from "./ListView";

function List() {
  let [items, setItems] = useState(tecnologies)

  function filterItems(searchQuery) {
    if (searchQuery === "") {
      setItems(tecnologies)
    }else{
      let filteredItems = getFilteredItems(searchQuery)
      setItems(filteredItems)
    }
  }

  function getFilteredItems(query) {
    let filtered = tecnologies.map(
      name => name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ? name : null
    )
    return filtered
  }
  return(
    <ListView elements={items} functionItemsFilter={filterItems} />
  )
}

export default List;