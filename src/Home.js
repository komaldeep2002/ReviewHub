import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const transportLinkStyles = {
    textDecoration: 'none', // Remove underline
    color: 'inherit',     // Inherit the color from the parent element
  };
  return (
    <div className="home">
      <header>
        <nav>
          <div className="logo">
            <h1>ReviewHub</h1>
          </div>
          <ul className="menu">
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to ReviewHub</h1>
          <p>Your one-stop destination for honest reviews</p>
          <Link to="/review" className="btn-primary">Post a Review</Link>
        </section>

        <section className="categories">
          <h2>Popular Categories</h2>
          <div className="category-list">
          <Link to="/Transport" style={transportLinkStyles}> {/* Wrap the entire card in a Link component */}
              <div className="category">
                <h3>Transport</h3>
                <p>Reviews about transportations and their products.</p>
              </div>
            </Link>
          <div className="category">
              <h3>Beauty</h3>
              <p>Reviews about the beauty products.</p>
            </div>
            <div className="category">
              <h3>Cars</h3>
              <p>Read and write reviews about the latest car models.</p>
            </div>
            <div className="category">
              <h3>Homes</h3>
              <p>Find reviews of real estate properties and home services.</p>
            </div>
            <div className="category">
              <h3>Health</h3>
              <p>Discover healthcare product and service reviews.</p>
            </div>
            <div className="category">
              <h3>Electronics</h3>
              <p>Discover electronics product and service reviews.</p>
            </div>
            <div className="category">
              <h3>Jewellery</h3>
              <p>Explore reviews of jewellery stores and accessories.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
