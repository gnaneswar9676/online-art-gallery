import React, { useState, useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';
import './css/SwiperSlider.css'; // Ensure you create this file

const SwiperSlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Array of image details
  const imageDetails = [
    {
      title: "Peacock Painting ",
      description: "Peacock paintings hold significant importance in Vastu and Feng Shui. In Vastu, a peacock painting is believed to attract positive energy, bringing prosperity, harmony, and peace to the home. The vibrant colors and regal presence of the peacock symbolize beauty and grace, enhancing the aesthetic appeal and uplifting the mood. In Feng Shui, the peacock represents dignity, love, and prosperity. Placing a peacock painting in the living room or entrance can invite auspicious energy, fostering a balanced and harmonious environment.",
      artist: "Vincent van Gogh",
      year: "1889",
    },
    {
      title: "llusion of reality in a painting form Handpainted ",
      description: "This inexpensive yet Beautiful Mind-Twisting Optical Illusion Painting with the real glass frame and faux wood finish border to give a elegant and decorative touch to your boring wall. The size of this painting is 11 x 9.5 inches. It is covered with real glass that gives it an expensive touch, unlike fiberglass, which looks CHEAP. The borders have the faux wood finish, which gives it a lavish touch.",
      artist: "Salvador Dalí",
      year: "1931",
    },
    {
      title: "Moon Over Water Spray Paint Art",
      description: "Spray paint (formally aerosol paint) is paint that comes in a sealed, pressurized container and is released in an aerosol spray when a valve button is depressed. The propellant is what the container of pressurized gas is called. When the pressure holding the gas is released through the valve, the aerosol paint releases as a fine spray.[1] Aerosol painting is one form of spray painting; it leaves a smooth, even coat, unlike many traditional rolled and brushed paints. Aerosol primer can be applied directly to bare metal and many plastics.",
      artist: "Leonardo da Vinci",
      year: "1503",
    },
    {
      title: "Bonsai Tree ",
      description: "Handmade Cherry Blossom Spray Painting Measurements and Material: 14.5\" x 20.5\" on Glossy Poster Board using High Gloss Enamel Spray Paint. All artwork is handmade to order. Please note that all pieces are original and will vary slightly, thus making each one unique and special.",
      artist: "Edvard Munch",
      year: "1893",
    },
    {
      title: "Gaia painting",
      description: "This inexpensive yet Beautiful Mind-Twisting Optical Illusion Painting with the real glass frame and faux wood finish border to give a elegant and decorative touch to your boring wall. The size of this painting is 11 x 9.5 inches. It is covered with real glass that gives it an expensive touch, unlike fiberglass, which looks CHEAP. The borders have the faux wood finish, which gives it a lavish touch..",
      artist: "Johannes Vermeer",
      year: "1665",
    },
    {
      title: "The Great Wave off Kanagawa",
      description: "A famous Japanese woodblock print of a large wave.",
      artist: "Hokusai",
      year: "1831",
    },
  ];

  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []);

  const handleImageSelect = (index) => {
    setSelectedImage(index); // Set the index of the selected image
  };

  const closeFullScreen = () => {
    setSelectedImage(null); // Close the full-screen view and return to Swiper UI
  };

  return (
    <>
      {!selectedImage && (
        <div className="swiper-container">
          <h1 className="virtual-tour-title">Paintings</h1>
          <div className="swiper-wrapper">
            {imageDetails.map((_, index) => (
              <div
                className="swiper-slide"
                key={index}
                onClick={() => handleImageSelect(index)}
              >
                <div className={`picture slide${index + 1}`}></div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      )}

      {selectedImage !== null && (
        <div className="full-screen-container">
          <div className="full-screen-left">
            <div className={`picture slide${selectedImage + 1}`}></div>
          </div>
          <div className="full-screen-right">
            <button className="close-button" onClick={closeFullScreen}>X</button>
            <h2>{imageDetails[selectedImage].title}</h2>
            <p><strong>Artist:</strong> {imageDetails[selectedImage].artist}</p>
            <p><strong>Year:</strong> {imageDetails[selectedImage].year}</p>
            <p>{imageDetails[selectedImage].description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperSlider;
