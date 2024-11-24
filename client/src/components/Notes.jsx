import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

function Notes() {
  const [reloadComponent, setReloadComponent] = useState(false);
  const dataArray = JSON.parse(localStorage.getItem("notes_data"));

  return (
    <div className="w-[90vw] max-w-[1000px] mt-4 mb-20 sm:mt-10 flex flex-col gap-5">
      {!dataArray || dataArray.length == 0 ? (
        <div className="flex flex-col justify-center items-center h-[60vh] mt-6 gap-4 text-white">
          <img
            className="text-white opacity-85 w-[45%]"
            src="/studying.png"
          ></img>
          <div className="flex flex-col sm:gap-4 gap-2 text-center">
            <h1 className="font-bold sm:text-4xl text-[5vw]">Empty List!</h1>
            <p className="font-medium sm:text-xl text-[3vw] text-[#C8ACD6]">
              Click the button to write something exciting!
            </p>
          </div>
        </div>
      ) : (
        dataArray.map((note, idx) => (
          <Note noteValue={note} idx={idx} setReloadComponent={setReloadComponent} key={idx} />
        ))
      )}
    </div>
  );
}

function Note({ noteValue, idx, setReloadComponent }) {
  const handleNoteDelete = () => {
    let dataArray = JSON.parse(localStorage.getItem("notes_data"));
    dataArray = dataArray.filter((element) => element.id !== idx);
    dataArray = dataArray.map((element, index) => {
      return { ...element, id: index }; // Assign the new index as the id
    });
  
    localStorage.setItem("notes_data", JSON.stringify(dataArray));
    setReloadComponent((prev) => !prev);
  };
  

  return (
    <div className="flex items-center justify-between bg-[#2E236C] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <div className="flex gap-2 items-center p-4 rounded-xl overflow-hidden text-ellipsis text-white">
        <span className="text-nowrap ml-1 text-center font-bold text-xl">
          {noteValue.title}
        </span>
        <span className="text-white text-ellipsis text-nowrap">
          {noteValue.description}
        </span>
      </div>
      <span
        onClick={handleNoteDelete}
        className="flex items-center justify-center hover:cursor-pointer text-white h-[70%] mr-2 aspect-square"
      >
        <RiDeleteBin5Line className="scale-150" />
      </span>
    </div>
  );
}

export default Notes;
