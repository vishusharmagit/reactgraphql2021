import github from "./db.js";
import {useEffect, useState} from "react";

function App() {
  let [userName, setUserName] = useState("");
  useEffect(() => {
    const githubquery = {
      query: `
      {
        viewer {
          name
        }
      }
      `,
    };

    fetch(github.baseURL, {
      method: "POST",
      headers: github.headers,
      body: JSON.stringify(githubquery),
    })
    .then( response => response.json())
    .then( data => {
      console.log("data : ", data);
      setUserName(data.data.viewer.name);
    })
    .catch( err => {
      console.log("Error : ", err);
    })
  });
  return (
    <div className="App container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill">Repos</i>
      </h1>
      {/* <p>Hari Om {userName}</p> */}
      <p>Hi {userName}</p>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           OM - Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
