import React from 'react'
import LoaderIcon from '../../assets/svg/LoaderIcon'
import UnDrawProg from '../../assets/svg/UnDrawProg';
import useFetch from '../../hooks/useFetch';
import TodoCardSkeleton from '../skeleton/TodoCardSkeleton';
import TodoCard from './TodoCard'

const TodoList = () => {
    const { data: todos, loading, error, refetch } = useFetch(
        `http://localhost:4000/getTask`
    );


    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-between align-middle items-center p-4'>
                    <div className='pt-3 pb-3 '>
                        <p className='sm:text-xl md:txt-md lg:text-lg xl:text-3xl font-bold text-gray-900'>My todo's 📝</p>
                    </div>
                    <div >

                        <div className={loading ? 'pointer-events-none animate-spin  fill-neutral-400' : 'cursor-pointer'} onClick={refetch}>
                            <LoaderIcon />
                        </div>
                    </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 ">
                    {
                        loading === true ? <TodoCardSkeleton /> :
                            todos?.map((todos) => (
                                <TodoCard {...todos} />
                            ))
                    }
                </div>
            </div>
        </>
    )
}

export default TodoList