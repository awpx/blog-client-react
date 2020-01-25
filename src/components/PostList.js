import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../contexts/BlogContext';
import { PostCard } from './PostCard';

export const PostList = () => {
  const { blogPosts, getPosts, loading } = useContext(BlogContext);

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <div className='posts'>
      <div className='container'>
        <h2>Posts</h2>
        {
          !loading 
          ? 
          (<div className='posts-grid-container'>
              {blogPosts.map((post, index) => {
                return (
                  <PostCard 
                    key={index}
                    title={post.title}
                    image={post.image}
                    author={post.author}
                    date={post.date}
                    id={post.id} />
                )}
              )}
            </div>)  
          : 
          ( <div>Loading...</div> )
        }
      </div>
    </div>
  )
}