import React from 'react'

const CompletedList = ({tasks, index, deleteTask, isComplete}) => {
  return (
    <div className="flex">
        <span 
               style={{textDecoration: isComplete ? "line-Through" : "none"}}
         >{tasks}</span>
    </div>
  )
}

export default CompletedList;