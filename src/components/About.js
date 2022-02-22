import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='contenthead mt-5 text-primary fw-bold'>About Us</h1>
          <p className='main-content mt-4'>Samsung was founded by Lee Byung-chul in 1938 as a trading company. Over the next three decades, the group diversified into areas including food processing, textiles, insurance, securities, and retail. Samsung entered the electronics industry in the late 1960s and the construction and shipbuilding industries in the mid-1970s; these areas would drive its subsequent growth. Following Lee's death in 1987, Samsung was separated into five business groups Samsung Group, Shinsegae Group, CJ Group and Hansol Group, and Joongang Group.
            Notable Samsung industrial affiliates include Samsung Electronics (the world's largest information technology company, consumer electronics maker and chipmaker measured by 2017 revenues),Samsung Heavy Industries (the world's 2nd largest shipbuilder measured by 2010 revenues),and Samsung Engineering and Samsung C&T Corporation (respectively the world's 13th and 36th largest construction companies). Other notable subsidiaries include Samsung Life Insurance (the world's 14th largest life insurance company),Samsung Everland (operator of Everland Resort, the oldest theme park in South Korea)[10] and Cheil Worldwide (the world's 15th largest advertising agency, as measured by 2012 revenues)</p>
            <NavLink to='./contact' className="btn btn-outline-primary mx-3">Contact Us</NavLink>
        </div>
        <div className='col-md-6 d-flex justify-content-center mt-4'>
          <img src='./assets/images/ab1img.jpg' alt='about us' height="500px" width="500px"/>
        </div>
      </div>
    </div>
  )
}

export default About