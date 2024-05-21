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

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-black mx-auto h-[100vh]">
      <div className="flex flex-row justify-between items-center p-6">
        <div className="h-12 w-12 bg-white rounded-full overflow-hidden">
          <img
            src="/men-1.jpg"
            alt="no image"
            className="w-fit object-cover "
          />
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
