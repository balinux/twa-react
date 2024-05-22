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
import { AiOutlineScissor } from "react-icons/ai";
import { PiHairDryerFill } from "react-icons/pi";
import { HiMiniPaintBrush } from "react-icons/hi2";
import { FaHighlighter } from "react-icons/fa6";
import Header from "./components/organisms/Header";
import SearchBar from "./components/organisms/SearchBar";
import CategoryMenu from "./components/organisms/CategoryMenu";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-black mx-auto h-[100vh]">
      <Header />
      {/* Search card */}
      <SearchBar />
      {/* Categories  */}
      <div className="text-2xl text-white mx-5 mt-5 mb-5">Categories</div>

      {/* Category Menu */}
      <CategoryMenu />

      <div className="card">
        <button
          className="bg-white"
          onClick={() => setCount((count) => count + 1)}
        >
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
