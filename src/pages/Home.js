import React from 'react';
import { Hero } from '../components/Hero';
import { PostList } from '../components/PostList';

export const Home = () => {
  return (
    <div>
      <Hero />
      <PostList />
    </div>
  )
};