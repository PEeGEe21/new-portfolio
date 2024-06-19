import React from 'react'

const About = () => {
  return (
    <section id="about" className="css-ebbcak">
        <div className="container">
            <h2>About Me</h2>
            <div className='flex items-start'>
                <div className="mentor__left animated w-4/12">
                    <picture>
                        <img src="img/pic.jpg" className="img-fluid" alt="my picture"/>
                    </picture>
                </div>
                <div className="mentor__right w-8/12">
                    <h2>Udeh PraiseGod C.</h2>
                    <p>Hello again, It's PraiseGod. I build responsive, user interactive, purpose oriented and highly optimized websites and applications with the use of various tools and libraries. I have always been enthusiastic about tech and really keen to learn and implement new knowledge and ideas which has brought me thus far. </p>
                    <p>The knowledge gotten so far has enabled me to build websites and create applications, putting ideas and imaginations into reality. This has heightened my passion and interest in my field. I currently work remotely and is open to new opportunities and collaborations with other developers. One thing I have always wanted to do is to impact and change the world with my knowledge and skills in tech.</p>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default About
