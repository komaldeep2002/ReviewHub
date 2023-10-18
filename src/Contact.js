import React, { useState, useEffect } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [confirmation, setConfirmation] = useState(false);
  const [questions, setQuestions] = useState({
    question1: false,
    question2: false,
    question3: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Validate the description length
    if (description.length < 50) {
      alert('Description must be at least 50 characters.');
      return;
    }
    // Handle form submission logic here (e.g., sending data to a server)

    // Display a confirmation message
    setConfirmation(true);

    // Clear the form after submission
    setEmail('');
    setSubject('');
    setDescription('');
  };

  useEffect(() => {
    if (confirmation) {
      // Hide the confirmation message after 5 seconds
      const confirmationTimeout = setTimeout(() => {
        setConfirmation(false);
      }, 500);

      // Clear the timeout when the component unmounts
      return () => clearTimeout(confirmationTimeout);
    }
  }, [confirmation]);

  const handleQuestionToggle = (question) => {
    setQuestions({
      ...questions,
      [question]: !questions[question],
    });
  };

  return (
    <div className="contact">
      <header>
        <h1>Contact Us</h1>
      </header>
      <main>
        <div className="contact-info">
          <h2>HELP CENTER</h2>
          <p
            onClick={() => handleQuestionToggle('question1')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            How can I provide reviews?
          </p>
          {questions.question1 && (
            <p>To provide reviews on ReviewHub, click on the "Post a Review" button on the homepage.
            Choose a category that matches the product or service you want to review.
            Rate your experience with the product or service by selecting stars.
            Write a detailed review in the description box, sharing your thoughts and experiences.
            Optionally, you can add an image to your review.
            Click the "Submit" button to publish your review for others to see.</p>
          )}
          <p
            onClick={() => handleQuestionToggle('question2')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            What can I write?
          </p>
          {questions.question2 && <p>You can write about a wide range of topics on ReviewHub.
Share your experiences with various products, services, or places.
Offer insights, recommendations, or warnings based on your experiences.
Be honest and provide useful information to help others make informed decisions.
Remember to follow the guidelines and be respectful to fellow users.</p>}
          <p
            onClick={() => handleQuestionToggle('question3')}
            style={{ color: 'blue', cursor: 'pointer' }}
          >
            Categories
          </p>
          {questions.question3 && (
            <p>ReviewHub covers a diverse set of categories.
            Explore "Beauty" for beauty product reviews.
            Check out "Cars" for insights on the latest car models.
            "Homes" offers reviews of real estate properties and home services.
            In "Health," discover healthcare product and service reviews.
            Explore "Jewellery" for insights into jewelry stores and accessories.</p>
          )}
        </div>
        <div className="contact-form">
          <form onSubmit={handleFormSubmit}>
            <label>
              Your email address<span className="asterisk">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>
              Subject<span className="asterisk">*</span>
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label>
              Description<span className="asterisk">*</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              minLength="50"
            ></textarea>
            <label>Attachments</label>
            <input type="file" />
            <button type="submit">Submit</button>
          </form>
          {confirmation && (
            <div className="confirmation">
              Inquiry submitted successfully.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Contact;
