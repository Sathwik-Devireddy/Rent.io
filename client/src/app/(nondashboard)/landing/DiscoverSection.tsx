"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const DiscoverSection = () => {
  const cards = [
    {
      imageSrc: "/landing-icon-wand.png",
      title: "Search for Properties",
      description:
        "Browse through our extensive collection of rental properties.",
    },
    {
      imageSrc: "/landing-icon-calendar.png",
      title: "Book Your Rental",
      description:
        "Once you've found the perfect rental property, book it easily.",
    },
    {
      imageSrc: "/landing-icon-heart.png",
      title: "Enjoy Your New Home",
      description:
        "Move into your new rental property and start enjoying your dream home.",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      variants={containerVariants}
      className="py-12 mb-16 bg-white"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Heading */}
        <motion.div variants={itemVariants} className="my-12 text-center">
          <h2 className="text-3xl font-semibold leading-tight text-gray-800">
            Discover
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Find your Dream Rental Space
          </p>

          <p className="mt-2 text-lg text-gray-600">
            Searching for your rental property has never been easier with us.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
          {cards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <DiscoverCard {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const DiscoverCard = ({
  imageSrc,
  title,
  description,
}: {
  imageSrc: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="px-4 py-12 text-center shadow-lg rounded-lg bg-primary-50 md:h-72">
      <div className="bg-primary-700 p-[0.6rem] rounded-full mb-4 h-10 w-10 mx-auto">
        <Image
          src={imageSrc}
          alt={title}
          width={30}
          height={30}
          className="w-full h-full"
        />
      </div>

      <h3 className="mt-4 text-xl font-medium text-gray-800">{title}</h3>

      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default DiscoverSection;
