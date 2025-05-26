import React from "react";
import { PhoneCall, MessageSquare } from "lucide-react";

const Call = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 md:px-8 text-center">
      <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
        For more details, you can contact us
      </h2>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
        {/* Call Now Button */}
        <a
          href="tel:+919315040549" // ✅ Replace with your number
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-700 transition"
        >
          <PhoneCall className="w-5 h-5" />
          Call Now
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919315040549" // ✅ Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-medium rounded-md shadow hover:bg-green-600 transition"
        >
          <MessageSquare className="w-5 h-5" />
          WhatsApp Now
        </a>
      </div>
    </section>
  );
};

export default Call;
