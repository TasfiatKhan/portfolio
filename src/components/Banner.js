import React from 'react'
import myphoto from '../utils/photo.jpg'

const Banner = () => {
  return (
    <div class="container pt-5 pb-5">
        <div class="row">
            <div class="col-lg-6 col-md-12 pt-5 site-title">

                <h1 class="title-text ">I am Tasfiat Zabir Khan</h1>
                <h4 class="title-text text-uppercase">Tech development Intern at miaki</h4>

            </div>
            <div class="col-lg-6 col-md-12 pl-5 banner-image">
                <img src={myphoto} alt="banner-img" class="img-fluid"/>
            </div>
        </div>
    </div>
  )
}

export default Banner