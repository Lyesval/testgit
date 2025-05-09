import { useState } from 'react'
import Comment from "./Components/Comment";
import Rating from "./Components/Rating";
import './App.css'


function App() {
  return (
    <div>
      <h1>Drop your feedback down below</h1>
      <BrowserRouter>
      <Routes>      
      <Route element={< Components />}>
          <Route path='/Comment' element={<Comment />} />
          <Route path='/Rating' element={<Rating />} />
      
        </Route>
        </Routes>         
        </BrowserRouter>

    </div>
  );
}


export default App
