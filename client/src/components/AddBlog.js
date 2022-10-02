import React from 'react'
import {useState, useEffect, useCallback} from "react"
import {Link} from "react-router-dom"
import axios from "axios"

const AddBlog = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const [fileName, setFileName] = useState("")

    const onChangeFile = (e) => {
        setFileName(e.target.files[0])
    }

    const addblog = (e) => {

        e.preventDefault()

        const formData = new FormData()

        formData.append("title", title)
        formData.append("author", author)
        formData.append("description", description)
        formData.append("myfile", fileName)

        setTitle("")
        setAuthor("")
        setDescription("")

        axios
            .post(`http://localhost:5000/api/main/addblog/`, formData)
            // .then((res) => setMessage(res.data))
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="flex h-screen">

            <div className="m-auto">

                <div className="w-full max-w-xs">

                    <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
                          onSubmit= {e => e.preventDefault()}
                          encType="multipart/form-data">

                        <div className="">
                            <Link to={`/`}>
                                <button
                                    className=" -ml-6 inline-flex items-center justify-center w-8 h-8 mr-2 text-gray-700 transition-colors duration-150 bg-white  rounded-full focus:shadow-outline hover:bg-gray-200">
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

                        <div className="mb-4 font-bold">
                            Enter new blog
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="username">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Title"
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="username">
                                Author
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Author"
                                onChange={e => setAuthor(e.target.value)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                   htmlFor="username">
                                Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Description"
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>

                        <div>
                            <input type="file"
                                   name="img" required
                                   onChange={onChangeFile}
                                   id="formFile"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-gray-400 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={addblog}>
                                Add
                            </button>
                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default AddBlog