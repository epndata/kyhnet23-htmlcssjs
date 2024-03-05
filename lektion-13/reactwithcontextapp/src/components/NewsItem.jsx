import React from 'react'

const NewsItem = ({item}) => {
  return (
    <div>
        <img src={item.imageUrl} alt={item.title} />
        <h4>{item.title}</h4>
        <p>{item.published}</p>
    </div>
  )
}

export default NewsItem