import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { BeatLoader } from 'react-spinners';

const PostLoader = () => {
  const { data, error, isLoading} = useQuery({
    queryKey: ['post'],
    queryFn: async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }
  });

  if (isLoading) {
    return ( // Add 'return' here to render JSX conditionally
      <div className="loader-container">
        <BeatLoader color="#36D7B7" loading={isLoading} size={40} />
      </div>
    );
  }

  if (error) {
    return ( // Add 'return' here to render JSX conditionally
      <div>Error fetching data: {error.message}</div>
    );
  }

  return (
    <div className="post-container">
      <h2>Post Details</h2>
      <p><strong>Id:</strong> {data.id}</p>
      <p><strong>Title:</strong> {data.title}</p>
      <p><strong>Body:</strong> {data.body}</p>
    </div>
  );
};

export default PostLoader;
