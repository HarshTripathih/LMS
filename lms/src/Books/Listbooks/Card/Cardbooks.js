import React from 'react'
import './Cardbooks.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { url } from '../../../resource';


const Cardbooks = ({ _id, title, author, publisher, release_date, pages, getbooks }) => {
   
    const navigate = useNavigate();

    async function deletebook(_id) {
        alert("Click!! 'Ok' to delete the book.")
        await axios.delete(`http://localhost:3002/api/books/${_id}`);
        getbooks();
    }
    

    const updateBook = (_id) => {
        navigate(`/editbook/${_id}`);
        // alert(_id+'s');
    }
    return (
        <div className="card-book-content">
            <div className="title-books">
                <div className="marquee-box">
                    <marquee direction="right"><h3 className="card-book-title">{title}</h3></marquee>
                </div>
            </div>
            <div className="card-book-decription">
                <h5> <span>Books Written by :</span> <br />{author}</h5>
                <h5><span>Book is Published by :</span> <br />{publisher}</h5>
                <h5><span>Book is released on :</span><br /> {release_date}</h5>
                <h5><span>Number of pages :</span> <br />{pages}</h5>
            </div>
            <div className="book-buttons">

                <button className="edit button" onClick={() => { updateBook(_id) }}>Edit</button>
                <button className="delete button " onClick={() => { deletebook(_id) }}>Delete</button>

            </div>
        </div>
    )
}

export default Cardbooks