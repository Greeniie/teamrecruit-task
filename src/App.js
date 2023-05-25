import React from "react";
import Form from "./components/Form";
import Receipt from "./components/Receipt";

function App() {
  return (
      <div className="app-wrap">
        <div className="box block md:grid md:grid-cols-12">
        <div className="close-btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><title>Close</title><path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"/></svg>
        </div>
        <div className="col-span-12 md:col-span-8">
          <Form/>
        </div>
        <div className="col-span-12 md:col-span-4">
          <Receipt/>
        </div>

        </div>
      </div>
  );
}

export default App;
