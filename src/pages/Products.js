import React from 'react';
import './Product.css';

function Product() {
  return (
    <div className="product-page">
      <h1>Our Services</h1>
      <div className="product-sections">
        <section className="product-section">
          <div className="product-card">
            <img src="https://wp-media-partyslate.imgix.net/2024/06/478608-scaled.jpg?auto=compress%2Cformat&fit=scale&h=840&ixlib=php-3.3.1&w=1260&wpsize=huge" />
            <div className="product-info">
              <h3>Wedding Planning</h3>
              <p>From intimate ceremonies to extravagant celebrations, we provide bespoke solutions to make your special day perfect.</p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-card">
            <img src="https://wowtheparty.com/img/4.jpg" />
            <div className="product-info">
              <h3>Birthday Parties</h3>
              <p>Crafting memorable birthday experiences with personalized themes, decorations, and entertainment tailored to your preferences.</p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-card">
            <img src="https://www.pingpongmoments.in/blog/wp-content/uploads/2022/02/corporate-event-management.png" />
            <div className="product-info">
              <h3>Corporate Events</h3>
              <p>Organizing professional and impactful events that align with your business objectives, including conferences, seminars, and product launches.</p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-card">
            <img src="https://networkevents.net/wp-content/uploads/2023/08/2022-10-27.jpg" />
            <div className="product-info">
              <h3>Exciting Gender Reveal</h3>
              <p>Celebrate the big reveal with us! We create unforgettable gender reveal events with fun activities and creative surprises.</p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-card">
            <img src="https://gproductions.in/wp-content/uploads/2024/08/Frame-10.png" />
            <div className="product-info">
              <h3>Social Gatherings</h3>
              <p>Planning and executing various social events, including anniversaries, reunions, and themed parties.</p>
            </div>
          </div>
        </section>

        <section className="product-section">
          <div className="product-card">
            <img src="https://www.weddingsutra.com/images/wedding-images/blog-images/ronak-isha/ronak-isha-img17.jpg" />
            <div className="product-info">
              <h3>Magical Proposal Moments</h3>
              <p>We craft romantic and unforgettable proposals tailored to your love story, ensuring a magical moment that will be cherished forever.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
