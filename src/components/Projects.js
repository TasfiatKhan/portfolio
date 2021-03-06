import React from 'react'

const Projects = () => {
  return (
    <div class="container pt-3 pb-5">
        <div class="text-center">
            <h1>Projects</h1>
        </div>
        <div class="card shadow p-3 mb-3">

            <div class="card-body">
                <h5 class="card-title ">Blog app using Django</h5>
                <h6 class="card-title">Supervisor: Prof. Farruk Ahmed</h6>
                <p class="card-text">Developed a blogging site using Django and python libraries that has all the basic sign-up,
                sign-in, post, create, read, update, delete functions available on the site. Python libraries such
                as 'image' and 'django-crispy-forms' were used in this project. Anyone with a valid email can
                signup and start posting blogs.</p>

            </div>
        </div>

        <div class="card shadow p-3 mb-3">

            <div class="card-body">
                <h5 class="card-title">Line following robotic car using Arduino</h5>
                <h6 class="card-title">Supervisor: Raihan Bin Rafique</h6>
                <p class="card-text">A small robotic car built using Arduino hardware and programmed with Arduino and it used
                sensors to detect a black line with zigzags on a flat white plane. It was able to follow that line
                from a given point to finish accurately within a given time. Arduino UNO, Digilent IR Range
                Sensor, SparkFun Dual-H motor drivers L298 and DC motor were used. The programming was
                done using Arduino.</p>

            </div>
        </div>
        <div class="card shadow p-3 mb-3">

            <div class="card-body">
                <h5 class="card-title">Student performance monitoring system</h5>
                <h6 class="card-title">Supervisor: Ms. Sadita Ahmed</h6>
                <p class="card-text">A performance monitoring software system developed using Django, MySQL, which can take
                inputs or excel sheets and generate statistical data or measures based on a Program Learning
                Outcome (PLO) score. The software can calculate how much individual students,
                departments, and schools score in terms of PLOs and then generate some basic data
                visualizations. Python libraries like NumPy, Pandas, Matplotlib
                </p>

            </div>
        </div>
    </div>
  )
}

export default Projects