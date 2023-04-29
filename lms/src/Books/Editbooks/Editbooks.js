import React, { useEffect, useState } from 'react';
import './Editbooks.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editbooks = () => {
  const { _id } = useParams();
  const [bookid, changeid] = useState("");
  const [title, changetitle] = useState("");
  const [author, changeauthor] = useState("");
  const [publisher, changepublisher] = useState("");
  const [release_date, changerelease_date] = useState("");
  const [pages, changepages] = useState("");
  const navigate = useNavigate();
  // alert(_id+'editbooks')

  useEffect(() => {
    
    axios.get(`http://localhost:3002/api/records/${_id}`).then((res) => {
      // console.log(res.data[0].release_date.split('T')[0])
      changetitle(res.data[0].title);
      changeauthor(res.data[0].author);
      changepublisher(res.data[0].publisher);
      changerelease_date(res.data[0].release_date.split('T')[0]);
      changepages(res.data[0].pages);
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);


  async function submit(e) {
    
    e.preventDefault();
    
    axios.post('http://localhost:3002/api/records', {
        title: title,
        author: author,
        publisher: publisher,
        release_date: release_date,
        pages: pages,
        _id:parseInt(_id)
    }).then((res) => {
        console.log(res)
        alert("book is added");
        navigate("/");
    })
}

  return (
    <div className="edit-books-box">
      <div className="edit-book-form">
        <div className="edit-book-form-title"><h1>Edit Book</h1></div>
        <div className="edit-form">
          <form onSubmit={(e) => submit(e)}>
            <div className="edit-title">
              <label>Title :</label>
              <div className="input-tilte"><input
                type={"text"}
                placeholder={"Write title here..."}
                value={title}
                id="title"
                onChange={(e) => { changetitle(e.target.value) }}
              /></div>
            </div>
            <div className="edit-author">
              <label>Author :</label>
              <div className="input-author"><input
                type={"text"}
                placeholder={"Write Author name here..."}
                value={author}
                id="author"
                onChange={(e) => { changeauthor(e.target.value) }}
              /></div>
            </div>
            <div className="edit-publisher">
              <label>Publisher :</label>
              <div className="input-publisher"><input
                type={"text"}
                placeholder={"Write Publisher name here..."}
                value={publisher}
                id="publisher"
                onChange={(e) => { changepublisher(e.target.value) }}
              /></div>
            </div>
            <div className="edit-release_date">
              <label>Release Date :</label>
              <div className="input-release-date"><input
                type={"date"}
                placeholder={"Select date.."}
                value={release_date}
                id="release_date"
                onChange={(e) => { changerelease_date(e.target.value) }}
              /></div>
            </div>
            <div className="edit-Pages">
              <label>Pages :</label>
              <div className="input-pages"><input
                type={"number"}
                placeholder={"Select Page.."}
                value={pages}
                id="pages"
                onChange={(e) => { changepages(e.target.value) }}
              /></div>
            </div>
            <button type="submit">Save</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Editbooks