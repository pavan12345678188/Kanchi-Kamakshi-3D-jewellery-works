import React from "react";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = "919949900434";

  const message = encodeURIComponent(
    "Hello Kanchi Kamakshi 3D Jewellery Works, I would like to enquire about your jewellery services."
  );

  const openWhatsApp = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Open WhatsApp application directly
    window.location.href =
      `whatsapp://send?phone=${phoneNumber}&text=${message}`;
  };

  return (
    <a
      href={`whatsapp://send?phone=${phoneNumber}&text=${message}`}
      onClick={openWhatsApp}
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-button"
    >
      <MessageCircle size={25} />
      <span>WhatsApp</span>
    </a>
  );
};