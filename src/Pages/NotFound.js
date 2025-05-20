import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <section className="banner_section banner_section_padding align_center">
        <div className="md_wrapper">

          <div className="text_container">
            <h1>404 - Page Not Found</h1>

            <p>The page you’re looking for doesn’t exist or may have been moved.</p>

            <a href="/" className="cta_button">
              Back to Home
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
