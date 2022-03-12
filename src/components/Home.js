import React from 'react'
import myphoto from '../utils/photo.jpg'
import classes from './Home.module.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className={classes.background}>
        
        <div className={classes.photo}>
            <img src={myphoto} class="img-fluid rounded-circle mx-auto d-block" alt="My"/>
        </div>

        <Link to="/portfolio" style={{ textDecoration: 'none' }}> 
            <div class="d-grid gap-2 col-2 mx-auto" >
                <button class="btn btn-outline-dark btn-lg" type="button">Welcome!</button>
            </div>
        </Link>
    </div>
  )
}

export default Home