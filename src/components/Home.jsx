import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Notes from "./Notes";
import { FaPlus } from "react-icons/fa6";
import AddNote from "./AddNote";

function Home() {
  const [addNoteOpen, setAddNoteOpen] = useState(false);
  const handleAddNote = () => {
    setAddNoteOpen(true);
  };

  useEffect(() => {
    const dataArray = localStorage.getItem("notes_data");
    console.log('data: ', dataArray)
    if (dataArray === null) {
      localStorage.clear()
      localStorage.setItem("notes_data", JSON.stringify([]));
    }
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Notes />
      <div className="fixed right-[6vw] bottom-[6vh]">
        <div
          onClick={handleAddNote}
          className="bg-[#433D8B] w-20 h-20 rounded-full flex items-center justify-center hover:cursor-pointer"
        >
          <FaPlus className="text-white w-[50%] h-[50%]" />
        </div>
      </div>
      {addNoteOpen ? <AddNote setAddNoteOpen={setAddNoteOpen} /> : ""}
    </div>
  );
}

export default Home;
