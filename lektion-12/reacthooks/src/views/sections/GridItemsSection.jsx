import React from 'react'
import ItemBox from '../components/ItemBox'

const GridItemsSection = ({title, items}) => {
    items.pop()

  return (
    <>
        <div>{title}</div>

        {
            items.map(item => (
                <ItemBox item={item} />
            ))
        }
    </>
  )
}

export default GridItemsSection