import React from 'react';
import './Product.css';

function Product() {
  // Array of product data for easier management
  const products = [
    {
      id: 1,
      title: 'Wedding Planning',
      description: 'From intimate ceremonies to extravagant celebrations, we provide bespoke solutions to make your special day perfect.',
      imgSrc: 'https://wp-media-partyslate.imgix.net/2024/06/478608-scaled.jpg?auto=compress%2Cformat&fit=scale&h=840&ixlib=php-3.3.1&w=1260&wpsize=huge'
    },
    {
      id: 2,
      title: 'Birthday Parties',
      description: 'Crafting memorable birthday experiences with personalized themes, decorations, and entertainment tailored to your preferences.',
      imgSrc: 'https://wowtheparty.com/img/4.jpg'
    },
    {
      id: 3,
      title: 'Corporate Events',
      description: 'Organizing professional and impactful events that align with your business objectives, including conferences, seminars, and product launches.',
      imgSrc: 'https://www.pingpongmoments.in/blog/wp-content/uploads/2022/02/corporate-event-management.png'
    },
    {
      id: 4,
      title: 'Exciting Gender Reveal',
      description: 'Celebrate the big reveal with us! We create unforgettable gender reveal events with fun activities and creative surprises.',
      imgSrc: 'https://networkevents.net/wp-content/uploads/2023/08/2022-10-27.jpg'
    },
    {
      id: 5,
      title: 'Social Gatherings',
      description: 'Planning and executing various social events, including anniversaries, reunions, and themed parties.',
      imgSrc: 'https://gproductions.in/wp-content/uploads/2024/08/Frame-10.png'
    },
    {
      id: 6,
      title: 'Magical Proposal Moments',
      description: 'We craft romantic and unforgettable proposals tailored to your love story, ensuring a magical moment that will be cherished forever.',
      imgSrc: 'https://www.weddingsutra.com/images/wedding-images/blog-images/ronak-isha/ronak-isha-img17.jpg'
    }
  ];

  return (
    <div className="product-page">
      <h1>Our Services</h1>
      <div className="product-sections">
        {products.map(product => (
          <section key={product.id} className="product-section">
            <div className="product-card">
              <img
                src={product.imgSrc}
                alt={product.title}
              />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default Product;
