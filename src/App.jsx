import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <button
          onClick={() => setOpen(true)}
          className="font-semibold text-xl bg-red-500 px-4 py-2 text-white shadow-md shadow-red-500 rounded focus:ring-4 focus:ring-red-300 hover:bg-red-600"
        >
          Delete
        </button>
        <Modal open={open} onClose={() => setOpen(false)} />
      </div>
    </>
  );
}

export default App;
