import {useCallback, useEffect, useState} from "react"
import axios from "axios"
import Imgmy from './../img/mosque.jpg'
import {Link} from "react-router-dom"
import shortid from "shortid"

const Main = () => {
    const [blogs, setBlogs] = useState([])

    const getBlogs = useCallback(async () => {
        try {
            await axios.get('/api/main', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => setBlogs(response.data))
        } catch (error) {
            console.log(error)
        }
    })

    const deleteBlogs = useCallback(async (id) => {
        try {
            await axios.delete(`/api/main/deleteblog/${id}`, {id}, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(() => getBlogs())
        } catch (error) {
            console.log(error)
        }
    }, [getBlogs])

    useEffect(() => {
        getBlogs()
    }, [])

    return (
        <div>

            <div className="flex m-4">
                <Link to={`/addblog`}
                      className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
                    <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
                        <path
                            d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"/>
                    </svg>
                    New
                </Link>
            </div>

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mx-auto">

                {
                    blogs.map((blog, index) => {
                            return (

                                <div key={shortid.generate()}
                                     className="flex flex-wrap h-96 max-w-sm m-6 rounded-xl shadow-2xl transform hover:scale-105 transform duration-500">

                                    <div className="w-full flex place-content-center">
                                        <div className="fixed left-0">
                                            <Link to={`/single/${blog.slug}`}>
                                                <button
                                                    className=" m-2 inline-flex items-center justify-center w-8 h-8 mr-2 text-gray-700 transition-colors duration-150 bg-white  rounded-full focus:shadow-outline hover:bg-gray-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="h-5 w-5"
                                                         fill="none"
                                                         viewBox="0 0 24 24"
                                                         stroke="currentColor">
                                                        <path strokeLinecap="round"
                                                              strokeLinejoin="round"
                                                              strokeWidth="2"
                                                              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/>
                                                    </svg>
                                                </button>
                                            </Link>
                                        </div>
                                        <div className="font-extrabold mx-12 mt-8">
                                            <h2>{blog.title}</h2>
                                        </div>
                                        <div className="fixed right-0">
                                            <button
                                                className="m-2 inline-flex items-center justify-center w-8 h-8 text-gray-700 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-gray-200"
                                                onClick={() => deleteBlogs(blog._id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                     className="h-5 w-5"
                                                     viewBox="0 0 20 20"
                                                     fill="currentColor">
                                                    <path fillRule="evenodd"
                                                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-none w-1/2 m-2">
                                            <img src={`/uploads/${blog.img}`}
                                                 alt="..."/>
                                        </div>
                                        <div className="flex-wrap">
                                            <div className="m-3">
                                            </div>
                                            <h1>{blog.description}</h1>
                                            <h1>Автор : {blog.author}</h1>
                                            <h1>Третье сообщение тута будет</h1>
                                            <h1>Четвертое сообщение тута будет</h1>
                                            <div className="">
                                                <ul className="columns-3">
                                                    <li>A</li>
                                                    <li>B</li>
                                                    <li>C</li>
                                                    <li>D</li>
                                                    <li>E</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                        }
                    )
                }
            </div>
        </div>

    )
}

export default Main
