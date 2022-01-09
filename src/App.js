import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';



function App() {

  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete?'))
    setFeedback(feedback.filter((item)=>item.id !==id))

  }
   
 
  return (
    <>
    <Header text={'Feedback UI'} bgColor={'rgba(0,0,0,0.4)'} textColor={'#ff6a95'} />
    <FeedbackForm />
    <FeedbackStats feedback={feedback} />
    <div className='container'>
     <FeedbackList feedback={feedback}
     handleDelete={deleteFeedback}/>
    </div>
    
    </>
   
  );
}

export default App;
