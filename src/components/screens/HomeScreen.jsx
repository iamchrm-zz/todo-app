import React, { Suspense } from 'react'
import useFetch from '../../hooks/useFetch';
import TodoHeader from '../header/TodoHeader'
import TodoHeaderSkeleton from '../skeleton/todoHeaderSkeleton';
import TodoList from '../todo/TodoList'

const HomeScreen = () => {
    const { data: todos, loading, error, refetch } = useFetch(
        `http://localhost:4000/getTask`
    );
    return (
        <>

            {
                todos &&
                todos?.map((todos) => {
                    <h1> {todos}</h1>
                })
            }



        </>
    )
}

export default HomeScreen