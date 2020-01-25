import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import { useParams } from 'react-router-dom';

export const Post = () => {
const { getPostById, currentBlogPost } = useContext(BlogContext);

let { postId } = useParams();

useEffect(() => {
  getPostById(postId);
}, []);

  return (
    <div className='post'>
      {currentBlogPost ? (
          <>
          <div
              className='post-image'
              style={{
                  width: '100%',
                  height: '300px',
                  backgroundImage: `url('${currentBlogPost.image}')`,
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  position: 'relative',
                  borderTopRightRadius: '2px',
                  borderTopLeftRadius: '2px'
              }}>
          </div>

          <div className='post-content'>
              <h2>{currentBlogPost.title}</h2>
              <p>{currentBlogPost.content}</p>
          </div>
          </>
          ) 
        : 

        ( <p>Loading...</p>)
      }
    </div>
  )
};