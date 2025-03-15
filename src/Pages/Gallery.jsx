import {
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
} from "@/utils/ImgUtils";
import { useState } from "react";

const clientGallery = [
  {
    id: 1,
    src: heroImage1,
    title: "Bridal Makeup",
  },
  {
    id: 2,
    src: heroImage2,
    title: "Elegant Hairstyle",
  },
  {
    id: 3,
    src: heroImage3,
    title: "Relaxing Facial",
  },
  {
    id: 4,
    src: heroImage4,
    title: "Manicure & Nail Art",
  },
  {
    id: 5,
    src: heroImage1,
    title: "Pedicure Session",
  },
  {
    id: 6,
    src: heroImage2,
    title: "Body Spa & Massage",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-[var(--main-color)]">
          Our Client Gallery
        </h2>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {clientGallery.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer overflow-hidden rounded-xl hover:opacity-90 transition-all gap-0"
              onClick={() => openModal(image)}
            >
              <img src={image.src} alt={image.title} className=" rounded-xl " />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white text-center py-2 text-sm font-medium">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative max-w-xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-pink-700 transition duration-300"
            >
              ✕
            </button>
            <div className="text-white text-center mt-4 text-xl font-semibold">
              {selectedImage.title}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
