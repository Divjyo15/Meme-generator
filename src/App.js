import React,{useState}from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import EditPage from './pages/Edit';
function App() {
  const [error, setError] = useState(null);

  // Function to handle errors
  const handleError = (error) => {
    console.error('An error occurred:', error);
    setError(error);
  };

  return (
    <div className="App">
      <Nav />
      <Router>
        {error ? (
          <div>An error occurred. Please try again later.</div>
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/edit" element={<EditPage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;

