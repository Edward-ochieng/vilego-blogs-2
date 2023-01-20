import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
function Navbar({user}) {
    const [navbar, setNavbar] = useState(false);
    const navigate = useNavigate()
    console.log(user)

    if (user) {
        return (
            <nav className="w-full bg-red-800 shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="/blogs">
                            <img src="http://res.cloudinary.com/dlt8epvwi/image/upload/v1674121886/ilccgavajk4lwlxcepkv.png" className="w-14 h-14 "></img>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                {/* <li className="text-white hover:text-indigo-200">
                                    <a href="/">Home</a>
                                </li> */}
                                <li className="text-white hover:text-indigo-200">
                                    <a href="/create">Create</a>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <a href="/blogs">Blogs</a>
                                </li>
                                <li className="text-white hover:text-indigo-200">
                                    <a href="/about">About US</a>
                                </li>

                            </ul>
    
                            <div className="mt-3 space-y-2 lg:hidden md:hidden">
                                <a
                                    href="/profile"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Profile
                                </a>
                                <button
                                    onClick={() => {
                                        localStorage.clear()
                                        navigate('/login')
                                    }}
                                    className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Log OUt
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="/profile"
                            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Profile
                        </a>
                        <button
                            onClick={() => {
                                localStorage.clear()
                                navigate('/login')
                            }}
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
            </nav>
        );
    } else {
        return (
            <nav className="w-full bg-[#d9003d] shadow">
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <a href="javascript:void(0)">
                                <img src="http://res.cloudinary.com/dlt8epvwi/image/upload/v1674121886/ilccgavajk4lwlxcepkv.png" className="w-14 h-14 "></img>
                            </a>
                            <div className="md:hidden">
                                <button
                                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div
                            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                                }`}
                        >
                            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                                <li className="text-white hover:text-black cursor-pointer hover-underline font-bold text-xl font-family:Roboto">
                                    <a href="/">Home</a>
                                </li>
                                <li className="text-white hover:text-black cursor-pointer hover-underline font-bold text-xl font-family:Roboto">
                                    <a href="/create/login">Create</a>
                                </li>
                                <li className="text-white hover:text-black cursor-pointer hover-underline font-bold text-xl font-family:Roboto">
                                    <a href="/about">About US</a>
                                </li>
                            </ul>
    
                            <div className="mt-3 space-y-2 lg:hidden md:hidden">
                                <a
                                    href="profile"
                                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                                >
                                    Profile
                                </a>
                                <button
                                    onClick={() => {
                                        navigate('/login')
                                    }}
                                    className="inline-block w-full px-8 py-5 text-center text-[#181919] bg-white rounded-md shadow hover:bg-gray-100"
                                >
                                    Log In
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="hidden space-x-2 md:inline-block">
                        <a
                            href="/login"
                            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                        >
                            Log In
                        </a>
                        {/* <button
                            onClick={() => {
                                localStorage.clear()
                                navigate('/login')
                            }}
                            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                        >
                            Log Out
                        </button> */}
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar