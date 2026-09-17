// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Homepage from "./Components/Homepage";
// import Recipe from "./Components/Recipe";
// import AddRecipe from "./Components/AddRecipe";

// function App() {
//   return;
//   <BrowserRouter>
//     <Routes>
//       Route path="/" element={<Homepage />}/Route path="/recipe" element=
//       {<Recipe />}/Route path="/add-recipe" element={<AddRecipe />}
//     </Routes>
//   </BrowserRouter>;
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <h1>Hello React!</h1>
//       <p>React is working.</p>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>Home Page Works!</h1>} />

//         <Route path="/recipe" element={<h1>Recipe Page Works!</h1>} />

//         <Route path="/add-recipe" element={<h1>Add Recipe Page Works!</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./Components/Homepage";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import Recipe from "./Components/Recipe";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/recipe" element={<Recipe />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Homepage from "./Components/Homepage";
// import Recipe from "./Components/Recipe";
// import AddRecipe from "./Components/AddRecipe";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/recipe" element={<Recipe />} />
//         <Route path="/add-recipe" element={<AddRecipe />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Recipe from "./Components/Recipe";
import AddRecipe from "./Components/AddRecipe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
