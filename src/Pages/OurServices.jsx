import {
  combo,
  discount,
  eyebrow,
  facial,
  hair,
  makeup,
  manicure,
  waxing,
} from "../utils/ImgUtils";

const OurServices = () => {
  const services = [
    {
      title: "Hair Style",
      image: hair,
      path: "/services/hair-style",
    },
    {
      title: "MakeUp",
      image: makeup,
      path: "/services/makeup",
    },
    {
      title: "Face-Threading",
      image: eyebrow,
      path: "/services/face-threading",
    },
    {
      title: "Facial",
      image: facial,
      path: "/services/facial",
    },
    {
      title: "Waxing",
      image: waxing,
      path: "/services/waxing",
    },
    {
      title: "Manicure-Pedicure",
      image: manicure,
      path: "/services/manicure-pedicure",
    },
    {
      title: "Combo-Pack",
      image: combo,
      path: "/services/manicure-pedicure",
    },
    // {
    //   title: "Coming Soon",
    //   image: discount,
    //   path: "/services/manicure-pedicure",
    // },
  ];

  return (
    <div className="bg-[var(--main-color2)] px-5 md:p-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold mb-6 text-center">
          Our Services
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-xl transition-all p-4 rounded-2xl shadow-md"
              data-aos="fade-right" // Add the AOS animation
            >
              <div className="w-full rounded-lg flex justify-center items-center overflow-hidden mb-2">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className=""
                />
              </div>
              <h3 className="text-black text-xl font-extrabold mb-2 text-center">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
