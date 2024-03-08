import React from 'react'
import ShowcaseImage from '../../assets/images/taskmaster-twisted.svg'
import Brand_1 from '../../assets/images/brand-logo_1.svg'
import Brand_2 from '../../assets/images/brand-logo_2.svg'
import Brand_3 from '../../assets/images/brand-logo_3.svg'
import Brand_4 from '../../assets/images/brand-logo_4.svg'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <section className="showcase">
        <div className="container">
            <img className="showcase-image" src={ShowcaseImage} alt="" />
            <div className="content">
                <h1>Task Management Assistant You Gonna Love</h1>
                <p>We offer you a new generation of task management system. Plan, manage & track all your tasks in one flexible tool.</p>
                <div className="get-started">
                    <Link className="btn-theme" to="/products">Get started for free</Link>
                </div>
                
                <div className="largest-brands">
                    <h6>Largest companies use our tool to work efficiently</h6>
                    <div className="brands">
                        <img src={Brand_1} alt="" />
                        <img src={Brand_2} alt="" />
                        <img src={Brand_3} alt="" />
                        <img src={Brand_4} alt="" />
                    </div>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default Showcase