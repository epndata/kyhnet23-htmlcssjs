import React from 'react'
import { Link } from 'react-router-dom'

const ItemBox = ({item}) => {
  return (
    <Link to={`/news/${item.id}`} className="item-box">
        <img src={item.imageUrl} />
        <div className="content">
            <div>{item.category}</div>
            <div>{item.published}</div>
            <div>{item.title}</div>
            <div>
                <img src={item.author.profileImageUrl} alt="" />
                <div>{item.author.firstName} {item.author.lastName}</div>
            </div>
        </div>
    </Link>
  )
}

export default ItemBox