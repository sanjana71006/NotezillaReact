// import React from 'react';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import PopularResources from './components/PopularResources/PopularResources';
// // Import other components like Features and Footer when you create them
// import './App.css';

// function App() {
//   return (
//     <>
//       <Header />
//       <main>
//         <Hero />
//         {/* You would add your <Features /> component here */}
//         <PopularResources />
//       </main>
//       {/* You would add your <Footer /> component here */}
//     </>
//   );
// }

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
// Import Footer when you build it
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      {/* <Footer /> will go here */}
    </>
  );
}

export default App;