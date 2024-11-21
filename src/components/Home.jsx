import AddNote from "./AddNote";
import Navbar from "./Navbar";
import Notes from "./Notes";

function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <Notes />
      <div className="fixed right-[6vw] bottom-[6vh]">
        <AddNote />
      </div>
    </div>
  );
}

export default Home;