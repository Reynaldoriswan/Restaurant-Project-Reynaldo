import React from 'react';
import aboutImage from '../../../public/assets/images/about.jpg'
import './about.css';
import Image from 'next/image';


export default function About() {
  return (
    <section id='about' className='about'>
        <div className='container' data-aos="fade-up">
            <div className='row'>
                <div
                className='col-lg-6 order-1 order-lg-2'
                data-aos="zoom-in"
                data-aos-delay="100"
                >
                    <div className='about-img'>
                        <Image src={aboutImage} alt='about-image' />
                    </div>
                </div>
                <div className='col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content'>
                    <h3>
                        Voluptatem dignissimos provident quasi corporis voluptates sit
                        assumenda.
                    </h3>
                    <p className='fst-italic'>
                        lorem ipsum dolor sit amet, consectutur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aligua.
                    </p>
                    <ul>
                        <li>
                            <i 
                            className='bi bi-check-circle'></i> Ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </li>
                        <li>
                        <i 
                        className='bi bi-check-circle'></i> Duis aute irure dolor in
                        reprehenderit in voluptate velit.
                        </li>
                    </ul>
                    <p> 
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        prodent, sunt in culpa qui officia deserunt mollit anim id est
                        laborum
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
