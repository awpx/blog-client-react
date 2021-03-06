import React from 'react';
import { Link } from 'react-router-dom';

export const PostCard = (props) => {
  return (
    <div className='card'>
      <div className='card-image' style={{
        width: '100%',
        height: '200px',
        backgroundImage: `url(${props.image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        borderTopLeftRadius: '2px',
        borderBottomRightRadius: '2px'
      }}>

      </div>

      <div className='card-info'>
        <div className='card-title'>
          <Link to={`/${props.id}`}>
            <p>{props.title}</p>
          </Link>
        </div>
        <div className='card-author-section'>
          <p>{props.author}</p>
          <p>{props.date}</p>
        </div>
      </div>
    </div>
  )
} 