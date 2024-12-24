import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"


export default function TodoInput(props) {
  const {handleAddTodos, todoValue, setTodoValue} = props

  const handleSubmit = () => {
    if (todoValue.trim() === "") return;
    handleAddTodos(todoValue);
    setTodoValue("");
  }

  return (
    <header className="flex items-center justify-center gap-4 py-6">
        <div className="flex items-center border rounded-md"> 
            <Input className="w-full" value={todoValue} onChange={(e) => setTodoValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="What needs to be done?"
            />
        </div>
        <div>
            <Button onClick={() => {
              handleAddTodos(todoValue)
              setTodoValue('')
            }} variant="outline" className="bg-black text-white w-28">Add</Button>
        </div>   
    </header>
  )
}
