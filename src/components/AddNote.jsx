import { FaPlus } from "react-icons/fa6";

function AddNote() {
  return (
    <div className="bg-[#433D8B] w-20 h-20 rounded-full flex items-center justify-center hover:cursor-pointer">
      <FaPlus className="text-white w-[50%] h-[50%]" />
    </div>
  );
}

export default AddNote;
