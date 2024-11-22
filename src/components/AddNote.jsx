import { useRef } from "react";

function AddNote({ setAddNoteOpen }) {
  const titleElRef = useRef();
  const descElRef = useRef();

  const handleAddNote = () => {
    const title = titleElRef.current.value.trim();
    const description = descElRef.current.value;

    if (!(title == "")) {
      const dataArray = JSON.parse(localStorage.getItem("notes_data"));
      const note = {
        id: dataArray.length,
        title: title,
        description: description,
      };
      dataArray.push(note);
      localStorage.setItem("notes_data", JSON.stringify(dataArray))
      setAddNoteOpen(false);
    } else {
      console.log("Msg: title cannot be empty");
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-[#1111118f] backdrop-blur-[2px] flex justify-center items-center">
      <div className="w-[85vw] h-[70vh] z-10 p-2 border max-w-[30rem] max-h-[30rem] rounded-md text-white text-2xl">
        <div className="w-full h-full flex flex-col gap-2">
          <textarea
            ref={titleElRef}
            placeholder={"Add title"}
            rows={1}
            className="w-full bg-transparent outline-none border p-2 resize-none"
          />
          <textarea
            ref={descElRef}
            placeholder={"add description"}
            className="w-full bg-transparent outline-none border p-2 resize-none h-full"
          />
          <div className="flex justify-end gap-2">
            <button
              className="border p-2 pl-4 pr-4 w-[30%]"
              onClick={() => setAddNoteOpen(false)}
            >
              Cancel
            </button>
            <button
              className="border p-2 pl-4 pr-4 w-[30%]"
              onClick={handleAddNote}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
