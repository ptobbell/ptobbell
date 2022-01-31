import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
    return (
        <Card>
            <div className='about'>
                <h1> About this Project   </h1>
                <p>This is to leave feedback</p>

                <Link to="/">Back to Home</Link>
            </div>
           
        </Card>
    )
}

export default AboutPage
