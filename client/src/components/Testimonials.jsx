import React from 'react'
import Title from './Title';
import { assets } from '../assets/assets';
import { motion } from 'motion/react';

const Testimonials = () => {


    const testimonials = [
        { name: "Emma Rodriguez",
        location: "Barcelona, Spain", 
        image: assets.testimonial_image_1,
        testimonial: "CarRental made my trip to easier .The car was deleivered in front of my door ,and the customer servie was fantastic." 
    },
        { name: "Kamla haris",
        location: "LOS ANGELES, USA", 
        image: assets.testimonial_image_2,
        testimonial: "I have rented car from various companies ,but expirence with CarRental was exceptional." 
    },
     { name: "John Smith",
        location: "New York, USA", 
        image: assets.testimonial_image_1,
        testimonial: "I have rented car from various companies ,but expirence with CarRental was exceptional." 
    },
       
    ];
  return (
      <div className='py-28 px-6 md:px-16 lg:px-24 xl:px-44'>
        <Title title="What our customer says" subTitle="Discover why discerning travelers choose 
        StayVenture for luxury accomodation around the world"/>
       
        
            <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,index) => (
                    <motion.div
                    initial= {{opacity: 0 , y:40}}
                    whileInView={{opacity:1 , y:0}}
                    transition={{duration:0.6,delay:index*2,ease:"easeOut"}}
                    viewport={{once:true ,amount:0.3}}
                    
                    key={index} className="bg-white p-6 rounded-lg  shadow-lg hover:-translate-y-1 
                    transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                               <img key={index} src={assets.star_icon} alt='Start-icon'/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </motion.div>
                ))}
            </div>
        
    </div>
    );
      
    
  
}

export default Testimonials
