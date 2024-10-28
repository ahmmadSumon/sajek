"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const tourData = [
    {
      id: 1,
      image: '/house.jpg',
      title: 'সাজেক ভ্যালি হাইকিং অভিযান',
      location: 'সাজেক ভ্যালি, বাংলাদেশ',
      rating: 4.8,
      review: "একটি অবিস্মরণীয় অভিজ্ঞতা! পাহাড়ের মধ্য দিয়ে হাইকিং করা অত্যন্ত উত্তেজনাপূর্ণ ছিল।",
      reviewer: 'সারা ম.'
    },
    {
      id: 2,
      image: '/Konglak-Para.jpg',
      title: 'সাজেক ভ্যালি ক্যাম্পিং অভিজ্ঞতা',
      location: 'সাজেক ভ্যালি, বাংলাদেশ',
      rating: 4.9,
      review: "সাজেক ভ্যালিতে তারার নিচে শিবির করা অত্যন্ত শান্তি দায়ক ছিল।",
      reviewer: 'জন ডি.'
    },
    {
      id: 3,
      image: '/food.jpg',
      title: 'সাজেক ভ্যালি বনফায়ার অনুষ্ঠান',
      location: 'সাজেক ভ্যালি, বাংলাদেশ',
      rating: 5.0,
      review: "সাজেক ভ্যালিতে একটি উষ্ণ বনফায়ারের চারপাশে বন্ধুদের সঙ্গে সময় কাটানো অত্যন্ত আনন্দদায়ক ছিল।",
      reviewer: 'এমা এল.'
    }
  ];
  
  const unforgettableMoments = [
    {
      id: 1,
      image: '/food.jpg',
      title: 'সাজেক ভ্যালি হাইকিং',
      description: 'সাজেক ভ্যালির লুচ্চ সবুজ পাহাড়ের মধ্য দিয়ে একটি উত্তেজনাপূর্ণ হাইকিং অভিযানে বের হোন।'
    },
    {
      id: 2,
      image: '/Bus.jpg',
      title: 'সাজেক ভ্যালি ক্যাম্পিং',
      description: 'সাজেক ভ্যালিতে তারার নিচে শিবির করার শান্তি অনুভব করুন।'
    },
    {
      id: 3,
      image: '/Helecopter-1.jpg',
      title: 'সাজেক ভ্যালি বনফায়ার',
      description: 'সাজেক ভ্যালিতে একটি উষ্ণ বনফায়ারের চারপাশে বন্ধুদের সঙ্গে সময় কাটান।'
    },
    {
      id: 4,
      image: '/abt3.jpg',
      title: 'সাজেক ভ্যালি সানসেট',
      description: 'সাজেক ভ্যালির পাহাড়ের উপর সূর্যাস্তের অসাধারণ দৃশ্য উপভোগ করুন।'
    },
    {
      id: 5,
      image: '/abt2.jpg',
      title: 'সাজেক ভ্যালি জলপ্রপাত',
      description: 'সাজেক ভ্যালির সুন্দর জলপ্রপাতের সামনে দাঁড়ান।'
    },
    {
      id: 6,
      image: '/abt1.jpg',
      title: 'সাজেক ভ্যালি উপজাতীয় গ্রাম',
      description: 'সাজেক ভ্যালির উপজাতীয় গ্রামের সংস্কৃতি ও ঐতিহ্য অনুসন্ধান করুন।'
    },
    {
      id: 7,
      image: '/local.jpg',
      title: 'সাজেক ভ্যালি পাহাড়ি সাইকেল চালনা',
      description: 'সাজেক ভ্যালির পাহাড়ি রাস্তায় সাইকেল চালনা করে উত্তেজনা অনুভব করুন।'
    },
    {
      id: 8,
      image: '/photography.jpg',
      title: 'সাজেক ভ্যালি প্যারাগ্লাইডিং',
      description: 'সাজেক ভ্যালির আকাশে প্যারাগ্লাইডিং করে অভিজ্ঞতা লাভ করুন।'
    },
    {
      id: 9,
      image: '/house.jpg',
      title: 'সাজেক ভ্যালি ঘোড়ায় চড়া',
      description: 'সাজেক ভ্যালির পাহাড়ি রাস্তায় ঘোড়ায় চড়ে ভ্রমণ করুন।'
    },
    {
      id: 10,
      image: '/room.jpg',
      title: 'সাজেক ভ্যালি তারা দেখা',
      description: 'সাজেক ভ্যালিতে রাতের আকাশে তারা দেখার অভিজ্ঞতা লাভ করুন।'
    }
  ];
  const Tours = () => {
    const [currentStartIndex, setCurrentStartIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setCurrentStartIndex((prev) => (prev + itemsToShow) % unforgettableMoments.length);
    };

    const prevSlide = () => {
        setCurrentStartIndex((prev) => (prev - itemsToShow + unforgettableMoments.length) % unforgettableMoments.length);
    };

    return (
        <div className=" py-20 z-30 w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto overflow-hidden">
                <h2 className="text-4xl font-extrabold text-white text-center mt-24 mb-12 relative">
                    <span className="bg-clip-text text-black">জীবনের সন্ধানে</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </h2>
                <p className="pt-2 text-center text-lg py-7 bg-clip-text text-black">সাজেক ভ্রমনের স্থিরচিত্র</p>

                <div className="relative w-full">
                    <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${(currentStartIndex / itemsToShow) * 100}%)` }}>
                        {unforgettableMoments.slice(currentStartIndex, currentStartIndex + itemsToShow).map((moment) => (
                            <div key={moment.id} className="w-full md:w-1/3 p-2">
                                <div className="bg-black rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                                    <div className="relative h-96">
                                        <Image
                                            src={moment.image}
                                            alt={moment.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 hover:scale-110"
                                            priority
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300">
                        <FaChevronLeft className="text-gray-800 w-6 h-6" />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-yellow-400 rounded-full p-3 shadow-lg hover:bg-yellow-500 transition duration-300">
                        <FaChevronRight className="text-gray-800 w-6 h-6" />
                    </button>
                </div>

                <h2 className="text-4xl font-extrabold text-white text-center my-12 relative">
                    <span className="pt-2 bg-clip-text text-black text-lg">অভিযাত্রীদের আনন্দ, অবিস্মরণীয় স্মৃতিগুলো</span>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tourData.map((tour) => (
                        <div key={tour.id} className="bg-black rounded-xl shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105">
                            <div className="relative h-56">
                                <Image
                                    src={tour.image}
                                    alt={tour.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-gray-100 mb-2">{tour.title}</h3>
                                <p className="text-gray-300">{tour.location}</p>
                                <div className="flex items-center mt-2">
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-yellow-400"><FaStar /></span>
                                    <span className="text-gray-300">{tour.rating}</span>
                                </div>
                                <p className="text-gray-300 mt-2">"{tour.review}"</p>
                                <p className="text-gray-400 text-sm mt-1">- {tour.reviewer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tours;