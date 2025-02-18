import { Link } from "react-router-dom";

import { bee, wpc, isi, epr, tec, bis } from "../utils/ImgUtils";

const OurServices = () => {
  const services = [
    {
      title: "BIS",
      description:
        'Ministry of Electronics & Information Technology (MeitY) has notified "Electronics and Information...',
      path: "/bis",
      image: bis,
    },
    {
      title: "BEE",
      description:
        "We help our clients get BEE labeling on their products. This labeling is given by Bureau of energy...",
      path: "/service2",
      image: bee,
    },
    {
      title: "WPC",
      description:
        "Equipment Type Approval (ETA) is an approval that has to be obtained from WPC before importing...",
      path: "/service3",
      image: wpc,
    },
    {
      title: "ISI",
      description:
        "Bureau of Indian Standards (BIS) offers an ISI Marking scheme for all products...",
      path: "/service4",
      image: isi,
    },
    {
      title: "TEC",
      description:
        "TEC refers to Telecom Engineering Centre, The Department of...",
      path: "/service5",
      image: tec,
    },
    {
      title: "EPR",
      description:
        "We at MCS Technology Inc, are providing end-to-end E-waste management...",
      path: "/service6",
      image: epr,
    },
  ];

  return (
    <div className="bg-[var(--main-color2)]">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-xl transition-all p-4 rounded-lg shadow-md"
              data-aos="fade-right" // Add the AOS animation
            >
              <div className="w-full rounded-lg flex justify-center items-center overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-60"
                />
              </div>
              <h3 className="text-black text-xl font-extrabold mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
                <Link
                  to={service.path}
                  className="text-blue-500 hover:underline ml-2"
                >
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
