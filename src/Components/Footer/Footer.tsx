import "./footer.scss"
import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className='container-fluid footer text-left mt-3'>
            <p className='mr-auto'>
                Developed by:
        <strong> Mohammed Gadeen</strong>
            </p>
            <div style={{ float: "right" }}>
                <Link to='mohammedgadeen@gmail.com' style={{ marginRight: "10px" }}>
                    <i className='fa fa-envelope-open'
                    aria-hidden='true'
                style={{ fontSize: "20px" }}></i>
                </Link>
                <Link
          to='https://github.com/Gadeenz'
          target='_blank'
          style={{ marginRight: "10px" }}>
          <i
            className='fa fa-github'
            aria-hidden='true'
            style={{ fontSize: "20px" }}></i>
        </Link>
        <Link
          to='https://www.linkedin.com/in/mohammed-gadeen-5885bb215/'
          target='_blank'
          style={{ marginRight: "10px" }}>
          <i
            className='fa fa-linkedin'
            aria-hidden='true'
            style={{ fontSize: "20px" }}></i>
        </Link>
            </div>
        </footer>
    )
}