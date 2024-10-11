import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Video from './Video';  // Import the Video component

function App() {
  const [quote, setQuote] = useState('');

  // Mock video data
  const video = {
    title: "Inspiring Video",
    description: "This video will motivate and inspire you.",
    url: "https://www.example.com",
    thumbnailUrl: "https://via.placeholder.com/150",  // Replace with actual thumbnail URL
    likes: 10,
  };

  // Fetch a random quote from the backend
  const fetchQuote = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/api/quote');
      setQuote(response.data.quote);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Quote of the Day</h1>
      <div className="quote-text">
        <p>{quote}</p>
      </div>

      {/* Add Video component after the quote */}
      <h2>Inspiring Video</h2>
      <Video video={video} />

      {/* Button to refresh quote */}
      <button onClick={fetchQuote} className="refresh-button">Get New Quote</button>
    </div>
  );
}

export default App;
