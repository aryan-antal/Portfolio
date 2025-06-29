import React from 'react';

function Home() {
return (
<>
    <section className="banner_section banner_section_padding">
    <div className="md_wrapper">
        <div className="profile_image">
            <img 
                src="public/Images/Profile.jpg" 
                alt="Aryan Antal"
            />
        </div>
        <div className="text_container">
            <h1>I craft responsive, user-focused, and performance-driven websites.</h1>
            <p>As a front-end developer, I blend design thinking and modern web technologies like React, Tailwind, and HubSpot CMS 
            to build seamless digital experiences. From rapid prototyping to pixel-perfect UI, I transform ideas into impactful interfaces.</p>
            <p>With startup agility and a user-first approach, I help teams launch web products that scale and convert.</p>
        </div>
    </div>
    </section>

    <section className="project_section">
    <div className="project_card_container">
        {/* PRoject Onw */}
        <div className="project_one product_card" >
            <div className="md_wrapper" >
                <div className="project_image">
                    <img src="public/Images/Smart Farming App.png" alt =""></img>
                </div>
                <div className="project_about">
                    <h3>Smart Farming System Using IoT and Cloud Technologies</h3>
                    <p>Developed a full-stack smart farming web application that enables farmers to monitor 
                        real-time environmental data (temperature, humidity, soil moisture) from multiple 
                        IoT devices using Firebase. The platform features user authentication, dashboard 
                        analytics, crop history tracking, and ESP8266 integration.</p>
                    <h5></h5>
                    <ul>
                        <li>Real-time data monitoring via IoT (ESP8266)</li>
                        <li>Firebase-based authentication and data storage</li>
                        <li>Responsive dashboard UI with charts and graphs</li>
                        <li>Built using HTML, CSS, JavaScript, React JS</li>
                    </ul>
                    <div className="button_container">
                        <a href="https://smartfarming.co.in/" className="cta_Button Arrow_button">
                                Show Project <span className="text-xl">→</span>
                        </a>
                    </div>
                    <a href="https://smartfarming.co.in/" className="project_link"></a>
                </div>
            </div>
        </div>
        {/* fifth Project */}
        <div className="project_six product_card" >
            <div className="md_wrapper" >
                <div className="project_image">
                    <img src="public/Images/Gsp.png" alt =""></img>
                </div>
                <div className="project_about">
                    <h3>GlobalSafe Perkasa Website (Concept Project on Squarespace)</h3>
                    <p>Created a modern concept website for a fire safety and emergency preparedness brand using
                        Squarespace. This project focused on clean visual presentation, product clarity,
                        and brand positioning. Designed to build trust and drive user engagement with
                        minimalistic yet informative layout structures.</p>
                    <h5>Features:</h5>
                    <ul>
                        <li>Designed fully on Squarespace using native customization tools</li>
                        <li>Modern hero section with bold messaging and CTAs</li>
                        <li>Responsive product showcase with minimal style</li>
                        <li>Trust-building testimonial slider and safety highlights</li>
                        <li>Contact form integration and section-based layout</li>
                    </ul>
                    
                    <div className="button_container">
                        <a href="https://www.globalsafeperkasa.com/" className="cta_Button Arrow_button">
                                Show Project <span className="text-xl">→</span>
                        </a>
                    </div>
                    <a href="https://www.globalsafeperkasa.com/" className="project_link"></a>
                </div>
            </div>
        </div>    
        {/* fourth Project */}
        <div className="project_four product_card" >
            <div className="md_wrapper" >
                <div className="project_image">
                    <img src="public/Images/Quote.png" alt =""></img>
                </div>
                <div className="project_about">
                    <h3>Watchful – Quote Template (Personal Concept Project)</h3>
                    <p>Designed and developed a professional HubSpot quote template as a personal concept 
                        project. Focused on replicating a real-world SaaS pricing proposal with modular
                            sections including summary, pricing table, and digital signature area.</p>
                    <h5>Features:</h5>
                    <ul>
                            <li>Custom-coded multistep form in HubSpot CMS</li>
                            <li>Modular structure with cost table and signature</li>
                            <li>Responsive design and client-ready layout</li>
                    </ul>
                    
                    <div className="button_container">
                        <a href="https://hubtest-242332888.hubspotpagebuilder.net/aRgry4wk2wxSkGc" className="cta_Button Arrow_button">
                                Show Project <span className="text-xl">→</span>
                        </a>
                    </div>
                    <a href="https://hubtest-242332888.hubspotpagebuilder.net/aRgry4wk2wxSkGc" className="project_link"></a>
                </div>
            </div>
        </div>  
        
    </div>
    </section>

    <section className="cta_section section_padding bg_dark all_text_white align_center">
        <div className="md_wrapper">
            <h2>Like what you see?</h2>
            <p>Explore more of my work or download my resume to get in touch.</p>
            <div className="buttons_container">
            <a href="/projects" className="cta_button White">
                Explore more
            </a>
            <a href="https://drive.google.com/file/d/1MZn-FpIObHsHLrdB8sUJX06H6xfAfKym/view?usp=sharing" className="cta_button white border">
                Download resume
            </a>
            </div>
        </div>
    </section>
</>
);
}

export default Home;
