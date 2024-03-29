import { useEffect, useState } from 'react';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';


import './home.css';

interface Todo {
  id: string;
  title: string;
}

interface TodoCardProps extends React.HTMLAttributes<HTMLParagraphElement> {
  todo: Todo;
  innerRef?: React.Ref<HTMLParagraphElement>
}

const Home = (): JSX.Element => {
  const { ref, inView } = useInView();


  const fetchTodos = async ({pageParam}: {pageParam: number}) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${pageParam}`);
    return res.json();
  }

  const {
    data, status, error, fetchNextPage, isFetchingNextPage, hasNextPage
  } = useInfiniteQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log(lastPage, allPages);
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
  });

  
  const todos = data?.pages.map((todos: Todo[]) => todos).flat()

  useEffect(() => {
if(inView && hasNextPage) {
  fetchNextPage();
}  
  }, [inView, hasNextPage, fetchNextPage])
  

  if(status === 'pending') <p>Loading...</p>
  if(status === 'error') <p>Error: {error.message}</p>
  
  return (
    <div className='home'>
     <h1>App</h1>
     {todos?.map((todo, i) => todos.length == i + 1 ? (
        <TodoCard key={todo.id} todo={todo} innerRef={ref}/>
        ) : (
          <TodoCard key={todo.id} todo={todo}/>
        )
      )}
     {isFetchingNextPage &&
      <p>Loading more todos...</p>

        // <button ref={ref} disabled={!hasNextPage} onClick={() => fetchNextPage() }>Load more...</button>
     }
     
    </div>
  );
};

const TodoCard = ({ todo, innerRef, ...props }: TodoCardProps): JSX.Element => <p className="todo-card" ref={innerRef} {...props} >{todo.title}</p>;


export default Home;
