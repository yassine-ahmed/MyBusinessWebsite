"use client"

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";


export default function Home() {
  const tasks = useQuery(api.tasks.getAllTasks);
  
  return (
    <>
    <h1>Home</h1>
    {tasks?.map(task => <div key={task._id}>
      <h2>{task.text}</h2>
      <p>is completed: {task.isCompleted}</p>
    </div>)}
    </>
  );
}
