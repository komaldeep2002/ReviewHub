import React from 'react';
import { Card } from 'react-bootstrap'; // Import the Card component from react-bootstrap
import './App.css';

function About() {
  return (
    <div className="about">
      <header>
        <h1 className="about-title">About Us</h1>
      </header>
      <main>
        <div className="about-card-container">
        <Card className="about-card">
          <Card.Body>
            <p>
              <strong>Welcome to ReviewHub</strong>, your trusted source for honest reviews. We are dedicated to providing a platform where users can share and discover valuable insights and recommendations on a wide range of products and services.
            </p>
            <div className="about-image">
              <img src="/about.jpg" alt="ReviewHub Team" />
            </div>
            <p>
              Our mission is to empower consumers by offering a space where they can read and write reviews about various categories, including beauty products, cars, real estate properties, healthcare services, jewelry, and more. We believe in transparency, and our community of users plays a vital role in helping others make informed decisions.
            </p>
            <p>
              If you have any questions, suggestions, or feedback, please don't hesitate to get in touch with us. Your input is important to us as we continue to improve our platform and provide you with the best experience.
            </p>
          </Card.Body>
        </Card>
        <div className="about-author">
          <Card className="about-card">
            <Card.Body>
              <h2>Komaldeep Kaur</h2>
              <div className="author-image">
              <img src="/me.jpg" alt="ReviewHub Team" />
            </div>
            <p>
      I'm Komaldeep Kaur, a recent graduate from SAIT with a degree in IT Software Development. My journey in the world of technology has been marked by a passion for creating user-friendly and innovative software solutions.
    </p>
    <p>
      I'm enthusiastic about all things related to web development, coding, and problem-solving. Whether it's crafting elegant user interfaces, diving into the intricacies of backend development, or solving complex algorithmic challenges, I'm always up for the task.
    </p>
    <p>
      My goal is to leverage technology to make a positive impact on people's lives, and I'm excited about the ever-evolving tech landscape that offers endless opportunities for creativity and innovation. If you have a project or an idea you'd like to collaborate on, feel free to get in touch!
    </p>

            </Card.Body>
          </Card>
          </div>
        </div>
      </main>
    </div>
  );
}

export default About;
