import notesData from "../notes.json";

function Notes() {
  return (
    <div className="w-[90vw] max-w-[1000px] mt-4 mb-20 sm:mt-10 flex flex-col gap-5">
      {notesData.data.map((note, idx) => (
        <Note noteValue={note} key={idx} />
      ))}
      {
        notesData.data.length == 0 ? (<img className="text-white scale-50 mt-[-150px] opacity-85" src="/studying.png"></img>) : ""
      }
    </div>
  );
}

function Note({ noteValue }) {
  return (
    <div className="p-4 rounded-xl overflow-hidden text-ellipsis text-white bg-[#2E236C] shadow-[5px_5px_0px_0px_rgba(109,40,217)]">
      <span className="text-nowrap mr-3 ml-1 text-center font-bold text-xl">
        {noteValue.title}
      </span>
      <span className="text-white text-ellipsis text-nowrap">{noteValue.description}</span>
    </div>
  );
}

export default Notes;
