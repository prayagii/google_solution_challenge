import React from "react";
import Nav from "../../components/Nav";
import Button from "../../components/Button";
import { FaPersonChalkboard } from "react-icons/fa6";
import { BsPersonVideo3 } from "react-icons/bs";
import { RiUserCommunityLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

const Home = () => {
  const cardData = [
    {
      icon: <RiUserCommunityLine size={24} />,
      heading: "Online Support Community",
      detail: "Connect with others who understand what you're going through",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaPersonChalkboard size={24} />,
      heading: "Mentorship Program",
      detail: "Find or become a mentor to help navigate life's challenges",
      image: "/public/Assets/images/image1.jpg",
    },
    {
      icon: <BsPersonVideo3 size={24} />,
      heading: "Live Assistance",
      detail: "Get instant support from our team to overcome life's obstacles",
      image:
        "https://images.unsplash.com/photo-1598257006675-0aaec40301f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const reviewData = [
    {
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Emily J.",
      username: "@emilyj",
      review: "NeuroClarity has been a game-changer for my mental health journey.",
    },
    {
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "David K.",
      username: "@davidk",
      review: "The community support has helped me feel less alone in my struggles.",
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Sarah T.",
      username: "@saraht",
      review: "NeuroClarity's resources have empowered me to take control of my life.",
    },
    {
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Michael B.",
      username: "@michaelb",
      review: "The mentorship program has connected me with like-minded individuals.",
    },

  ];
  return (
    <div className=" w-full bg-background">
      <Nav />
      <div className="h-full w-full px-[4rem] pt-[14vw]">
        <h1 className="text-[4vw] font-semibold w-[50%] leading-[4.5vw]">
          Empowering Neurodiverse Minds with Technology and Care
        </h1>

        <p className="w-[30%] text-lg mt-4">
          Transforming lives through innovative solutions for autism, ADHD,
          dyslexia, and more.
        </p>

        <Button text={"Join us"} />
      </div>

      <div className="flex flex-col py-10 items-center mt-[5vw]">
        <h1 className="text-[3vw] text-center font-semibold w-[50%]">
          Join Our Trusted{" "}
          <span className="text-colour1">Neurodiverse Community</span>
        </h1>
        <div className="mt-[6vw]  flex items-center gap-[4vw]">
          {cardData.map((item, key) => (
            <div key={key} className="px-5 py-6 border overflow-hidden relative h-48 rounded-lg border-gray-300  w-80">
              <div className=" opacity-0 hover:opacity-100  duration-300 absolute  left-0 top-0 h-full w-full">
                <img loading="lazy" className="h-full rounded-md w-full object-cover hover:scale-105 duration-300 " src={item.image} alt="" />
              </div>
              {item.icon}
              <h2 className="text-lg font-semibold mt-6">{item.heading}</h2>
              <p className="text-gray-600 mt-1.5">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col py-10 items-center mt-[5vw]">
        <h1 className="text-[3vw] text-center font-semibold w-[50%]">NeuroClarity is for <span className="text-colour1">Transforming Lives</span></h1>

        <div className="review mt-[6vw] overflow-hidden flex items-center gap-[2vw]">
          {reviewData.map((item, index) => (
            <div key={index} className="px-5 py-5 border overflow-hidden relative h-48 rounded-lg border-gray-300  w-80">
              <div className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                <div className="h-12 rounded-full overflow-hidden w-12">
                  <img loading="lazy" className=" w-full h-full object-cover" src={item.image} alt="" />  
                </div> 
                <div >
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <h4 className="text-xs text-gray-600">{item.username}</h4>
                </div>
                </div>
                <BsTwitterX size={20}/>
              </div>

              <p className="mt-6">{item.review}</p>

            </div>
          ))}
        </div>

        <h2 className="text-[2vw] text-center font-semibold mt-[5vw]">Connect, Learn, and Grow Today!</h2>
        <Button text={"Join Now"}/>
      </div>
    </div>
  );
};

export default Home;
