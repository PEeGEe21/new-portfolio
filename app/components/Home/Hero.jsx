import React from 'react'

const Hero = () => {
  return (
    <div className="bg-heroGray text-black pt-28 md:pt-40 pb-0" id="overview">
        <div className="container h-full">
            <div className="flex h-full items-center px-4 md:pb-16">
                <div className="col-12 col-md-7 col-lg-7 max-w-screen-md">
                    <div className="hero-slides-content">
                        <h1 className="font-medium tracking-tight text-4xl md:text-6xl my-8">Welcome To My Portfolio</h1>
                            <p className="mb-5">
                                Hello, I am PraiseGod and I'm a Full-stack Software Developer, a fulltime tech enthusiast and learner. I have grounded knowledge of various programming languages, frameworks and libraries.
                            </p>
                    </div>
                    
                    <div className="flex my-4 arrow-container">
                        <a href="My Resume.pdf" target="_blank" className="btn btn-success btn-custom h5 text-white arrow-link" download>
                            <img src="img/download2.svg" />
                            <span className="">
                                Download CV
                            </span>
                        </a>
                        <a href="#contact" className="btn btn-outline-dark btn-custom h5 ml-3 arrow-link" >
                            <i className="fas fa-envelope mr-1"></i>
                            <span className="">
                                Contact Me
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
