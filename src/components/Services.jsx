import { HoverEffect } from "./ui/Card_hover_effect";

const services = [
  {
    title: "Website Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
  {
    title: "Basic SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
  {
    title: "Stripe Integration",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
  {
    title: "Bug Fixes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
  {
    title: "Database Management",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
  {
    title: "Code Review",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias officia asperiores vero quisquam, aut recusandae laboriosam minima quis tenetur. Omnis?",
    link: "",
  },
];
const Services = () => {
  return (
    <div className="container flex min-h-[100vh] flex-col items-center justify-center text-white">
      <h2 className="my-20 text-[60px]">Services</h2>
      <HoverEffect items={services} />
    </div>
  );
};

export default Services;
