import React from 'react'
import TimerIcon from '../../assets/svg/TimerIcon'


const TodoCard = ({ id, title, description, updateAt, createAt, status }) => {
    return (
        <>
            <div key={id} onClick={() => console.log(id)} className="max-h-30  bg-white rounded-lg shadow-md border p-5 cursor-pointer hover:bg-slate-100 transition duration-150 ease-out hover:ease-in">
                <div className="flex justify-between items-center">
                    <span className="sm:text-xl md:txt-2xl lg:text-2xl xl:text-3xl font-bold text-gray-900 mr-5">
                        {title.length >= 20 ? title.substring(0, 20).concat('...') : title}
                    </span>
                    <span className={status === true ? `dark:bg-blue-200 dark:text-blue-800 text-blue-800` + ` bg-blue-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ` : `dark:bg-yellow-200 dark:text-yellow-800 text-yellow-800` + ` bg-yellow-100 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded `}>{status === true ? 'completed ' : 'In progress'}</span>

                </div>
                <div className='flex text-justify h-20 '>
                    <p className="text-gray-700 text-base pt-3">
                        {description.length >= 100 ? description.substring(0, 100).concat('...') : description}
                    </p>
                </div>
                <div className='flex justify-end items-end h-10 max-h-full'>
                    <span className="h-5 bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center   px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        <TimerIcon /> {updateAt ? updateAt : createAt}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TodoCard


