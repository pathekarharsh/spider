import React, { useState, useEffect } from "react";
import one from "../../assets/one.jpg";
import two from "../../assets/two.jpg";
import three from "../../assets/three.jpg";
import four from "../../assets/four.jpg";

const Slider = () => {
  const slides = [
    {
      title: "Welcome, Harsh Pathekar! 🎉",
      description:
        "We're excited to have you on the Healthify Dashboard. Here, you'll find all the tools and insights you need to manage your health journey effectively.",
      image: one,
    },
    {
      title: "Track Your Wellness Goals Seamlessly! 🌟",
      description:
        "Stay ahead in your health journey by monitoring your progress with personalized insights and tools. Set achievable goals and get reminders.",
      image: two,
    },
    {
      title: "Book Your Monthly Health Test! 🔬",
      description:
        "Take control of your health journey by scheduling appointments with top healthcare professionals.",
      image: three,
    },
    {
      title: "Secure Your Future with Healthify Insurance! 🛡️",
      description:
        "Take the next step in your health journey by protecting yourself and your loved ones.",
      image: four,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Change slide every 2 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-[95%] h-[25vh] mx-auto my-4 overflow-hidden rounded-lg shadow-lg">
      {/* Slide Container */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
            style={{
              flex: `0 0 100%`,
            }}
          >
            {/* Full Background Image */}
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover", // Ensures the image fills the area
                backgroundPosition: "center", // Centers the image
                backgroundRepeat: "no-repeat", // Prevents tiling
              }}
            >
              {/* Overlay for text */}
              <div className="bg-black bg-opacity-50 w-full h-full flex flex-col justify-end p-6">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="mt-2 text-sm md:text-base lg:text-lg text-white drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
