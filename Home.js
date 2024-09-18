import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      {/* Carousel Section */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.licdn.com/dms/image/C4D12AQH8uRS4mO9Skg/article-cover_image-shrink_720_1280/0/1520097797413?e=2147483647&v=beta&t=gswjBqGA7vkK8PGVDGrQ7bDfwnx6Ou8lCJ7moPGSkPQ"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>"Forever Together"</h3>
            <p>"Creating magical weddings through flawless coordination and attention to every detail."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.aicaevents.com/wp-content/uploads/2020/09/Garden_birthday_party_decoration_by_aicaevents_TPG1closeup.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>"Birthday Bliss"</h3>
            <p>"Crafting joyful birthday experiences with personalized touches and seamless organization."</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.eventsair.com/wp-content/uploads/2020/01/corporate-event-2-1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>"Professional Events"</h3>
            <p>"Creating memorable corporate events with attention to detail and a focus on your business objectives."</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Image-Text Section */}
      <div className="image-text-section">
        <div className="image">
          <img src="/images/logo.png" alt="Product" />
        </div>
        <div className="text">
        <h2 class="heading">Elevate Your Events</h2>

<p class="paragraph">
  We specialize in transforming your vision into unforgettable experiences. With a focus on precision planning, creative execution, and exceptional service, we handle every detail to ensure your event is a resounding success. Whether it's a grand wedding, a milestone birthday, or a high-profile corporate gathering, our dedicated team of experts works tirelessly to deliver seamless events that leave lasting impressions.
</p>

        </div>
      </div>

      {/* Four Image Cards Section */}
      <div className="cards-section">
        <div className="card">
          <img src="https://s3.envato.com/files/469933995/DSC08204-Edit.jpg" />
          <h3>Successful Events</h3>
        </div>
        <div className="card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgEgrlh2BLnJxsTBC8q3ylZd8Fh1AemEjTek96sVuYdpV2LJIvfRNGV1PSHNLmhWgoGdg&usqp=CAU" />
          <h3>Awards and Recognitions</h3>
        </div>
        <div className="card">
          <img src="data:image/jpeg;base64,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" alt="Card 3" />
          <h3>Partnerships and Collaborations</h3>
        </div>
        <div className="card">
          <img src="https://m.media-amazon.com/images/I/616ErYxqEeL._AC_UF1000,1000_QL80_.jpg" alt="Card 4" />
          <h3>Media Coverage</h3>
        </div>
      </div>

      {/* Testimonial Carousel Section */}
      <div className="testimonial-carousel-section">
        <h2>Testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <div className="testimonial">
              <p>"This product changed my life. Highly recommend!"</p>
              <h4>- John Doe</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial">
              <p>"Outstanding quality and service. Will buy again!"</p>
              <h4>- Jane Smith</h4>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="testimonial">
              <p>"A top-tier product that met all my expectations."</p>
              <h4>- Sam Wilson</h4>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
