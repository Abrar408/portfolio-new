import { HoverEffect } from "./ui/Card_hover_effect";
import development from "../../public/services/development.png";
import seo from "../../public/services/seo.png";
import payment from "../../public/services/payment.png";
import bug from "../../public/services/bug1.png";
import database from "../../public/services/database.png";

const services = [
  {
    image: development,
    title: "Website Development",
    description:
      "Crafting custom, responsive, and user-friendly websites that cater to your unique business needs",
    link: "",
  },
  {
    image: seo,
    title: "SEO",
    description:
      "Enhancing your website's visibility with fundamental SEO practices to improve search engine rankings.",
    link: "",
  },
  {
    image: payment,
    title: "Payment Gateway Integration",
    description:
      "Seamlessly incorporating secure payment solutions to ensure smooth and reliable transactions.",
    link: "",
  },
  {
    image: bug,
    title: "Bug Fixes",
    description:
      "Identifying and resolving issues to ensure your website runs smoothly and efficiently.",
    link: "",
  },
  {
    image: database,
    title: "Database Management",
    description:
      "Efficiently organizing, managing, and maintaining your databases to ensure data integrity and accessibility.",
    link: "",
  },
];

const Services = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col items-start justify-center text-white">
      <h2 className="-mb-20 text-[140px] font-bold text-white group-hover:-my-10">
        Services<span className="text-web_red">.</span>
      </h2>
      <HoverEffect items={services} />
    </div>
  );
};

export default Services;
