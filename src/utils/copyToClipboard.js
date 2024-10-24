'use client'
import { useState } from "react";
// FontAwesome
import { faCopy } from "../utils/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function CopyToClipboard() {
    // Initial text
  const [textToCopy] = useState("seanbass99@gmail.com"); 
   // State to manage copied effect
  const [i] = useState(false);
  // State to manage notification visibility
  const [showNotification, setShowNotification] = useState(false); 


  const handleCopy = async () => {
    try {
    // Copy text to clipboard
      await navigator.clipboard.writeText(textToCopy); 
      setShowNotification(true); // Show notification
       // Remove "Copied!" text after 2 seconds
      setTimeout(() => setShowNotification(false), 3000); 
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={handleCopy}>
          <FontAwesomeIcon icon={faCopy} className="dark:text-white"/>
        </button>
      </div>
      
      {/* Notification */}
      {showNotification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#333",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "4px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          Copied to the clipboard!
        </div>
      )}
    </div>
  );
}