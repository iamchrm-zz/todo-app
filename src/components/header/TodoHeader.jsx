import React from 'react'
import useFetch from '../../hooks/useFetch';

const TodoHeader = () => {
    const { data: user, loading, error, refetch } = useFetch(
        "http://localhost:4000/getUser"
    );
    return (
        <>
            {user?.map((user) => (
                <div key={user.id} className="bg-gray-50">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                        <div className="flex items-center sm:justify-between sm:gap-4">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                                    Welcome Back, {user?.name}!
                                </h1>

                                <p className=" mt-1.5 text-base text-gray-500">
                                    Let take note's and keep up organizated! 🚀
                                </p>

                            </div>

                            <div
                                className="flex items-center justify-end flex-1 gap-8 sm:justify-end"
                            >
                                <button
                                    type="button"
                                    className="flex items-center transition rounded-lg group shrink-0"
                                >
                                    <img
                                        className="object-cover w-10 h-10 rounded-full"
                                        src="https://www.hyperui.dev/photos/man-4.jpeg"
                                        alt="Simon Lewis"
                                    />

                                    <p className="hidden ml-2 text-xs text-left sm:block">
                                        <strong className="block font-medium">{user?.name}</strong>

                                        <span className="text-gray-500">{user?.name}@gmail.com</span>
                                    </p>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="hidden w-5 h-5 ml-4 text-gray-500 transition sm:block group-hover:text-gray-700"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </>

    )
}

export default TodoHeader

