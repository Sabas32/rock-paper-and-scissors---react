import React, { useState } from 'react';
import './ShareButton.css'; // Create a CSS file for styling

function ShareButton() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShareClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleShareOptionClick = (platform) => {
    // Define the URL you want to share
    const shareUrl = 'https://example.com'; // Replace with your website URL

    // Define the share text
    const shareText = 'Check out this website!';

    // Create the share URL based on the selected platform
    let finalShareUrl;
    switch (platform) {
      case 'whatsapp':
        finalShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareText + ' ' + shareUrl
        )}`;
        break;
      case 'instagram':
        // Instagram sharing is limited to the mobile app, so you can't share directly via a link.
        // You can provide a link to your Instagram profile instead.
        finalShareUrl = 'https://www.instagram.com/yourprofile/';
        break;
      case 'linkedin':
        finalShareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          shareUrl
        )}&title=${encodeURIComponent(shareText)}`;
        break;
      case 'facebook':
        finalShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}&quote=${encodeURIComponent(shareText)}`;
        break;
      default:
        finalShareUrl = shareUrl;
    }

    // Open the share link in a new tab
    window.open(finalShareUrl, '_blank');

    // Close the dropdown
    setShowDropdown(false);
  };

  return (
    <div className="share-button-container">
      <button onClick={handleShareClick} className="share-button">
        Share
      </button>
      {showDropdown && (
        <div className="share-dropdown">
          <button onClick={() => handleShareOptionClick('whatsapp')}>
            WhatsApp
          </button>
          <button onClick={() => handleShareOptionClick('instagram')}>
            Instagram
          </button>
          <button onClick={() => handleShareOptionClick('linkedin')}>
            LinkedIn
          </button>
          <button onClick={() => handleShareOptionClick('facebook')}>
            Facebook
          </button>
        </div>
      )}
    </div>
  );
}

export default ShareButton;
