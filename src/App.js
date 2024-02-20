  import "./App.css";

  function App() {

    function addTask() {
      // saare elements to ikatta karo 
      let createSpace = document.getElementById("space");
      let inputSpace = document.getElementById("exampleFormControlInput1");
      let element1 = document.createElement("h1");
      let element2 = document.createElement("button");

      // actions perform kro element - 1 ka
      element1.style =
      "border : 1px solid grey; padding : 30px; position : relative";
      element1.textContent = inputSpace.value;
      
      // actions perform kro element - 2 ka
      element2.className = "btn btn-close";
      element2.addEventListener("click", () => remove(element1));
      element2.style = "position : relative; float : right";

      // Page mein append kro...
      createSpace.appendChild(element1);
      element1.appendChild(element2);

      // reset kro input ko har baar
      inputSpace.value = "";
    }

    // "Clear All" button ke liye
    function clearTask() {
      let createSpace = document.getElementById("space");

      // div ke har ek element ko target kro
      while (createSpace.firstChild) {
        createSpace.removeChild(createSpace.firstChild);
      }
    }

    // 'X' button ke liye 
    function remove(element2) {
      let createSpace = document.getElementById("space");

      // simple and subtle
      createSpace.removeChild(element2);
    }

    return (
      <>
        <div className="container mb-3" tabindex="-1">
          <h1 className="my-4">To-Do List</h1>
          <input
            type="email"
            className="form-control my-4"
            id="exampleFormControlInput1"
            placeholder="Enter your task here"
          />
          <button className="btn btn-primary my-1" onClick={addTask}>
            Add Task
          </button>
          <button className="btn btn-primary my-1 mx-3" onClick={clearTask}>
            Clear All
          </button>
        </div>
        <div className="container tasks" id="space"></div>
      </>
    );
  }

  export default App;
