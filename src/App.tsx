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
import Header from "./components/organisms/Header";
import SearchBar from "./components/organisms/SearchBar";
import CategoryMenu from "./components/organisms/CategoryMenu";
import TitleSection from "./components/atom/TitleSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-black mx-auto h-[100vh]">
      <Header />
      {/* Search card */}
      <SearchBar />
      {/* Categories  */}

      <TitleSection word1="Category" word2="more" />

      {/* Category Menu */}
      <CategoryMenu />

      <TitleSection word1="Popular Service" word2="more" />

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
