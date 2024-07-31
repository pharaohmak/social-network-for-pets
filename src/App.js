import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from './components/Profile';
import { Directory } from './components/Directory';
import './index.css'; // Ensure this import is added for any global styles

function App() {
  const [currentUsername, setCurrentUsername] = useState(null);

  const handleChoose = (newUsername) => {
    setCurrentUsername(newUsername);
  };

  const handleReturnToDirectoryClick = () => {
    setCurrentUsername(null);
  };

  let body;
  if (currentUsername) {
    body = <Profile username={currentUsername} onChoose={handleChoose} />;
  } else {
    body = <Directory onChoose={handleChoose} />;
  }

  return (
    <div className="App">
      <header>
        <h1>PetBook</h1>
        <nav>
          {currentUsername && (
            <button onClick={handleReturnToDirectoryClick}>
              Return to directory
            </button>
          )}
        </nav>
      </header>
      <main>{body}</main>
    </div>
  );
}

export default App;