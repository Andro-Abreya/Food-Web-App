import React, { useState } from 'react';
 // Import a CSS file for styling (optional)

const HoverButton = ({ buttonText }) => {
  // State to track hover state
  let backgroundColor = '#1d4d4f';
  const [isHovered, setHovered] = useState(false);

  // Function to handle hover events
  const handleHover = () => {
    setHovered(!isHovered);
  };

  // Define styles based on hover state using Tailwind CSS classes
  const buttonClasses = `hover:bg-[#7fb800] hover:text-black bg-[${backgroundColor}] text-white font-bold py-2 px-8 rounded-md transition duration-200 ease-in-out`;

  return (
    <button
      className={buttonClasses}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {buttonText}
    </button>
  );
};

export default HoverButton;