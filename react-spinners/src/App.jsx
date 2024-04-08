import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostLoader from './PostLoader.jsx';
import "./App.css"
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <h1>Fetching Data with Tanstack React Query and React Spinners</h1>
        <PostLoader />
      </div>
    </QueryClientProvider>
  );
};

export default App;
