import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import "./App";

function Review() {
  const [clicked, setClicked] = useState(false);
  const [stars, setStars] = useState(1);
  const [category, setCategory] = useState(""); // State to hold the selected category
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [image, setImage] = useState(null); // State to hold the uploaded image

  const onMouseOver = (rating) => {
    if (clicked) return;

    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
    });
  };

  const onMouseOut = (rating) => {
    if (clicked) return;

    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });
  };

  const onClick = (rating) => {
    setClicked(true);
    setStars(rating);
    // Reset
    [...Array(5)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });

    // highlight
    [...Array(rating)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
    });
  };
    

  const resetForm = (e) => {
    e.preventDefault();

    // Reset
    [...Array(5)].map((x, i) => {
      document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
    });

    setReview("");
    setStars(1);
    setClicked(false);
    setImage(null);
  };

  const submitReview = (e) => {
    e.preventDefault();
    const newReview = {
      rating: stars,
      description: review,
      image: image,
    };

    setReviews([...reviews, newReview]);
    resetForm(e);
  };

  const deleteReview = (e, index) => {
    e.preventDefault();

    const clone = [...reviews];
    const newState = clone.filter((x, i) => i !== index);
    setReviews(newState);
  };
  // Function to handle image upload
  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  return (<div className="colorful">
    <Container fluid className="App text-light text-center">
         {/* Back Button */}
         <Link to="/" className="back-button" style={{ marginTop: '20px' }}>
          <FontAwesomeIcon icon="arrow-left" className="text-light" />
          <span className="ml-2">HOME</span>
        </Link>
      <Col md={{ span: 6, offset: 3 }}>
        <Row className="mt-5">
          <Col>
            {[...Array(5)].map((x, i) => {
  const starId = `star-${i + 1}`;
  return (
    <span
      key={i}
      id={starId} // Add the ID here
      onClick={() => onClick(i + 1)}
      onMouseOver={() => onMouseOver(i + 1)}
      onMouseOut={() => onMouseOut(i + 1)}
    >
      {i +1 <= stars ? (
        <FontAwesomeIcon icon={solidStar} className="text-warning star-icon" />
      ) : (
        <FontAwesomeIcon icon={regularStar} className="text-warning star-icon" />
      )}
    </span>
  );
})}
{/* Category selection */}
<Row className="mt-3">
          <Col>
            <Form.Group>
              <Form.Label className="select">Select Category</Form.Label>
              <Form.Select
                value={category}
                onChange={handleCategoryChange}
              >
                <option value="">Select a category</option>
                <option value="transport">Transport</option>
                <option value="women">Beauty</option>
                <option value="men">Cars</option>
                <option value="children">Homes</option>
                <option value="things">Health</option>
                <option value="electronics">Electronics</option>
                <option value="nature">Jewellery</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

    <div className="mt-2">
        {/* File input button */}
        <label htmlFor="imageUpload" className="btn btn-primary">
          <FontAwesomeIcon icon={faImage} className="text-white" />
          <span className="ml-2">Add Image</span>
        </label>
        {/* Hidden file input */}
        <input
          type="file"
          id="imageUpload"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
      {image && (
        <div className="mt-3">
          <img src={image} alt="Selected" style={{ maxWidth: "250px", maxHeight: "250px" }} />
        </div>
      )}
          </Col>
        </Row>
        <Row className="mt-5">
        <p className="des">Describe the product: </p>
          <Col>
            <Form.Group >
              <Form.Control
                as="textarea"
                rows={3}
                value={review}
                onChange={(e) => setReview(e.target.value)}
              /> 
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button variant="warning" onClick={(e) => resetForm(e)} style={{ marginRight: '45px' }}>
              RESET
            </Button>
            <Button
              variant="success"
              onClick={(e) => submitReview(e)}
              disabled={review === ""}
            >
              SUBMIT
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            {reviews.map((r, rIndex) => {
              return (
                <Card className="mt-3 mb-3 text-dark">
                  <Card.Body>
  {[...Array(r.rating)].map((s, sIndex) => {
    return <FontAwesomeIcon icon={solidStar} className="text-warning" />;
  })}
  {/* Review display */}
  {category && (
          <Row className="mt-3">
            <Col>
              <Card className="text-dark">
                <Card.Body>
                  <h5>Selected Category:</h5>
                  <p>{category}</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
  <p>{r.description}</p>
  {r.image && (
                <img src={r.image} alt="Review" style={{ maxWidth: "100px" }} />
              )}
</Card.Body>
                  <Card.Footer>
                    <Button
                      variant="danger"
                      onClick={(e) => deleteReview(e, rIndex)}
                    >
                      DELETE
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Col>
    </Container>
    </div>
  );
}

export default Review;