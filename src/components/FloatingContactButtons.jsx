import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingContactButtons = ({ phoneNumber }) => {
  const phoneLink = `tel:${phoneNumber}`;
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button */}
      <a
        href={phoneLink}
        className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg hover:bg-green-700 transition"
        aria-label="Call Now"
      >
        <FaPhoneAlt size={20} />
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1ebc5c] transition"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;
