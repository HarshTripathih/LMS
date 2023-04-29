import React, { useState } from 'react'
import axios from 'axios'
import './Addbooks.css'
import { Link, useNavigate } from 'react-router-dom';


const Addbooks = () => {
    const navigate = useNavigate();
    const url = "http://localhost:3001/Books"
    const [books, setbooks] = useState({
        title: "",
        author: "",
        publisher: "",
        release_date: "",
        pages: "",
        id: ""
    })

    async function submit(e) {
        e.preventDefault();
        axios.post('http://localhost:3002/api/books', {
            title: books.title,
            author: books.author,
            publisher: books.publisher,
            release_date: books.release_date,
            pages: books.pages,
            _id:books.id,

        }).then((res) => {
            console.log(res)
            alert("book is added");
            navigate("/");
        })
    }

    function handel(e) {
        const newbook = { ...books }
        newbook[e.target.id] = e.target.value
        newbook[e.target.name] = e.target.value
        setbooks(newbook)
        console.log(newbook)
    }

    return (
        <div className="add-books-box">
            <div className="add-book-img">
                <img src="https://cdn.pixabay.com/photo/2018/05/22/14/00/girl-3421489_960_720.jpg" alt="error" />
            </div>

            <div className="add-book-form">
                <div className="add-book-form-title"><h1>Add Book</h1></div>
                <div className="book-form">
                    <form onSubmit={(e) => submit(e)}>
                        <div className="title">
                            <label>Title :</label>
                            <div className="input-tilte"><input
                                type={"text"}
                                placeholder={"Write title here..."}
                                value={books.title}
                                id="title"
                                onChange={(e) => handel(e)}
                                name='title'
                                required/></div>
                        </div>
                        <div className="author">
                            <label>Author :</label>
                            <div className="input-author"><input
                                type={"text"}
                                placeholder={"Write Author name here..."}
                                value={books.author}
                                id="author"
                                name='authorname'
                                onChange={(e) => handel(e)}
                                required/></div>
                        </div>
                        <div className="publisher">
                            <label>Publisher :</label>
                            <div className="input-publisher"><input
                                type={"text"}
                                placeholder={"Write Publisher name here..."}
                                value={books.publisher}
                                id="publisher"
                                onChange={(e) => handel(e)}
                                name='publishername'
                                required/></div>
                        </div>
                        <div className="release_date">
                            <label>Release Date :</label>
                            <div className="input-release-date"><input
                                type={"date"}
                                placeholder={"Select date.."}
                                value={books.release_date}
                                id="release_date"
                                name='date'
                                onChange={(e) => handel(e)}
                            required/></div>
                        </div>
                        <div className="Pages">
                            <label>Pages :</label>
                            <div className="input-pages"><input
                                type={"number"}
                                placeholder={"Select page.."}
                                value={books.pages}
                                id="pages"
                                name='page'
                                onChange={(e) => handel(e)}
                                required/></div>
                        </div>
                        <div className="id">
                            <label>id :</label>
                            <div className="input-id"><input
                                type={"number"}
                                placeholder={"Enter ID.."}
                                value={books.id}
                                id="ID"
                                name='id'
                                onChange={(e) => handel(e)}
                                required/></div>
                        </div>
                        <button>Add a Book</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Addbooks