import React from 'react'
import { useLocation } from 'react-router'

const FooterSection = () => {
    let location = useLocation()

    return (
        <footer>
            <div className="container">
                {
                !location.pathname.includes('/news') && (
                    <div className="social-media">
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-twitter"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                )
                }
                <div>&copy; 2024 EPN Sverige AB. Alla rättigheter reserverade.</div>
            </div>
        </footer>
    )
}

export default FooterSection