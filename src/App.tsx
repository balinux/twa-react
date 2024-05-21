import { useState } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import { GoBell } from "react-icons/go";
import { Input } from "./components/ui/input";
import { AiOutlineScissor } from "react-icons/ai";
import { PiHairDryerFill } from "react-icons/pi";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaHighlighter } from "react-icons/fa6";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-black mx-auto h-[100vh]">
      <div className="flex flex-row justify-between items-center p-6 mb-6 text-white">
        <div className="h-10 w-10 bg-white rounded-full overflow-hidden">
          <img
            src="/men-1.jpg"
            alt="no image"
            className="w-fit object-cover "
          />
        </div>
        <GoBell className="text-white w-7 h-7" />
      </div>
      {/* Search card */}
      <div className="flex flex-row mb-6">
        <Input
          type="text"
          placeholder="Search service"
          className="rounded-full bg-black mx-5 border-2 border-gray-600 text-white"
        />
      </div>

      {/* Categories  */}
      <div className="text-2xl text-white mx-5 mt-5 mb-5">Categories</div>

      {/* Category Menu */}
      <div className="flex flex-row gap-5 mx-5 mb-5 justify-evenly">
        <div className="flex flex-col">
          <div className="h-12 w-12 rounded-full bg-black border-2 border-gray-800 inline-flex items-center justify-center mb-4">
            <AiOutlineScissor className="text-gray-400 h-6 w-6" />
          </div>
          <div className="text-gray-400 text-sm">Hair Cut</div>
        </div>
        <div className="flex flex-col">
          <div className="h-12 w-12 rounded-full bg-black border-2 border-gray-800 inline-flex items-center justify-center mb-4">
            <HiMiniPaintBrush className="text-gray-400 h-6 w-6" />
          </div>
          <div className="text-gray-400 text-sm">Hair Color</div>
        </div>
        <div className="flex flex-col">
          <div className="h-12 w-12 rounded-full bg-black border-2 border-gray-800 inline-flex items-center justify-center mb-4">
            <PiHairDryerFill className="text-gray-400 h-6 w-6" />
          </div>
          <div className="text-gray-400 text-sm">Hair Cut</div>
        </div>
        <div className="flex flex-col">
          <div className="h-12 w-12 rounded-full bg-black border-2 border-gray-800 inline-flex items-center justify-center mb-4">
            <FaHighlighter className="text-gray-400 h-6 w-6" />
          </div>
          <div className="text-gray-400 text-sm">Trimming</div>
        </div>
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {/*  */}
      <div className="card">
        <Button
          onClick={() =>
            WebApp.showAlert(`Hello World! Current count is ${count}`)
          }
        >
          Show Alert
        </Button>
        <Button
          variant="outline"
          onClick={() => WebApp.openLink("https://yhotie.com")}
        >
          web yhotie
        </Button>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}

export default App;
