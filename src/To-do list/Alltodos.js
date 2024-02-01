import React from 'react'
import List from './Todo'

const Alltodos = ({tasks, deleteTask, upTask, downTask,  finishedTask}) => {
  return (
    <div>
        
        {tasks.map((tasks,index) => {
          return (
            <li key={index} >
              <List tasks={tasks}
                  isComplete={false}
                  deleteTask={deleteTask} 
                  upTask={upTask} 
                  downTask={downTask} 
                  index={index}
                  finishedTask={finishedTask}/>
            </li>
          )
        })}
    </div>
  )
}

export default Alltodos