import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Star } from "lucide-react";

const CustomerReviews = () => {
  // Carousel settings for brands

  // Carousel settings for reviews
  const reviewSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  // Client Reviews Data
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      comment:
        "Amazing service! The facial was super relaxing, and my skin feels great.",
    },
    {
      id: 2,
      name: "Anjali Verma",
      rating: 4,
      comment:
        "Loved the manicure and pedicure session. The staff was very professional.",
    },
    {
      id: 3,
      name: "Rohini Mehta",
      rating: 5,
      comment: "Great home salon service! Highly recommend for bridal makeup.",
    },
    {
      id: 4,
      name: "Simran Kaur",
      rating: 4,
      comment:
        "Very convenient and professional. Booked a spa session at home, and it was amazing!",
    },
    {
      id: 5,
      name: "Neha Gupta",
      rating: 5,
      comment:
        "Excellent hair styling! Loved my new look. Very convenient and professional. Booked a spa session at home, and it was amazing!",
    },
  ];

  return (
    <div className="pt-10 pb-20 px-5 ">
      <div className="container ">
        {/* Client Reviews Section */}
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center text-[var(--main-color)]">
          What Our Clients Say
        </h2>
        <Slider {...reviewSettings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold">{review.name}</h3>
                <div className="flex justify-center mt-2 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={18}
                      className={
                        index < review.rating
                          ? "fill-yellow-500"
                          : "stroke-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReviews;
