import { CiTrash } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { Button } from "@/components/ui/button";

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="flex justify-between items-center p-3 mb-2 border rounded-lg shadow-sm hover:bg-gray-200">
      {children}
      <div className="flex space-x-4 text-2xl">
        <Button variant="ghost"
          className="h-12 w-12 flex items-center justify-center p-0"
          onClick={() => {
            handleDeleteTodo(index);
          }}>
          <CiTrash className="2xl" />
        </Button>
        <Button
          variant="ghost"
          className="h-12 w-12 flex items-center justify-center p-0"
          onClick={() => {
            handleEditTodo(index)
          }}
        >
        <CiEdit className="text-2xl" />
        </Button>

      </div>
    </li>
  );
}
