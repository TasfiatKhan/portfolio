import React from 'react'
import myphoto2 from '../utils/photo2.jpg'

const Summary = () => {
  return (
    <div class="container pt-5 pb-5">
        <div class="row">
            <div class="col-lg-4 col-sm-6 pl-5 pt-5">
                <div class="about-image">
                    <img src={myphoto2} alt="About us" class="img-fluid"/>
                </div>
            </div>
            <div class="col-lg-6 col-md-12 pl-5 pt-5">
                <h2 class="text-uppercase pt-5">
                    <span>Summary</span>

                </h2>
                <div class="paragraph py-4 ">
                    <p class="para">
                    Final year computer science student and Tech Development Intern at Miaki, looking forward to building a solid career as a software
                    engineer by leveraging not only my communication, presentation skills developed as an IELTS
                    instructor, but also my academic knowledge and programming skills.
                    </p>

                </div>
                <button type="button" class="btn btn-warning text-uppercase">Download cv</button>
            </div>
        </div>
    </div>
  )
}

export default Summary