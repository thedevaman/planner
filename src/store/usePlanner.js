import { create } from "zustand";
import { persist } from "zustand/middleware";
import moment from "moment";

export const usePlanner = create(persist(
   (set)=>({
  
    tasks:[],
    addTasks:(payload)=>set((state)=>({
        tasks:[...state.tasks,payload]
    })),
    deleteTask:(id)=>set((state)=>({
      tasks:state.tasks.filter((tasks)=>tasks.id !== id)
    })),
    updateTasks: (id, status)=>set((state)=>({
        tasks:state.tasks.filter((tasks)=>{

            if(tasks.id === id)
                tasks.status = status
            return tasks    
    })
    })),
     deleteAllTasks:()=>set(()=>({
      tasks:[]
    })),

  

    }),
    {name:"planner"}
))