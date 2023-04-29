import React from 'react'
import Cardbooks from './Card/Cardbooks'
import './Listbooks.css';


const Listbooks = ({ books, getbooks }) => {
  
  return (
    <div className="list-card-data">
      {
        books?.map((book, index) => {
          const { title, author, publisher, release_date, pages,_id } = book
          console.log(_id)
          return (
            <Cardbooks
              _id={_id}
              title={title}
              author={author}
              publisher={publisher}
              release_date={release_date}
              pages={pages}
              getbooks={getbooks}
            />
          )
          
        })
      }
    </div>
  )
}

export default Listbooks