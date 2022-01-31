import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import { v4 as uuidv4} from 'uuid';
import AboutIconLink from './components/AboutIconLink';

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
   newFeedback.id = uuidv4()
   setFeedback([newFeedback,...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    setFeedback(feedback.filter((item)=>item.id !==id))

  }
   

  return (
    <Router>
      <Header text={'Feedback UI'} bgColor={'rgba(0,0,0,0.4)'} 
      textColor={'#ff6a95'} />
    
      <div className='container'>
        <Routes>
          <Route exact path='/' element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback}
              handleDelete={deleteFeedback}/>
            </>
          }>
          </Route>
        
          <Route path='/about' element={<AboutPage/>}>
            
          </Route>
         
       </Routes>
       
      </div>
      <AboutIconLink></AboutIconLink>
    </Router>
   
  );
}

export default App;
