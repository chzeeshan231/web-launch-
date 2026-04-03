import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// --- Assets ---
import aboutIcon from '../assets/about.png'; // Used for the "Testimonial" badge

const Testimonials = () => {
  const Motion = motion;
  const reviews = [
    {
      id: 1,
      name: 'Jordan Walk',
      role: 'Software Engineer at Briks',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      text: 'Working with them was a true pleasure. They were responsive, communicative, and always willing to go the extra mile. I especially appreciated their attention to detail.'
    },
    {
      id: 2,
      name: 'Ema Watson',
      role: 'Founder at Ritof',
      stars: 4,
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      text: 'Throughout the process, they kept me informed and involved, ensuring I was happy with the direction. I came to them with a vague idea, and they helped me refine it into a concrete plan.'
    },
    {
      id: 3,
      name: 'Jakob Alison',
      role: 'Project Manager at Triko',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      text: 'Was initially hesitant about the project, but they quickly put my mind at ease. Their expertise and creative solutions were impressive. The final results exceeded my expectations.'
    },
    {
      id: 4,
      name: 'Sarah Jenkins',
      role: 'Marketing Lead at Flux',
      stars: 5,
      image: 'https://randomuser.me/api/portraits/women/22.jpg',
      text: 'The team delivered a high-quality product well within our tight deadline. Their professionalism and technical skill are unmatched in the industry today.'
    },
    {
      id: 5,
      name: 'Michael Chen',
      role: 'CEO at TechStream',
      stars: 4,
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      text: 'Great experience from start to finish. They understood our brand identity perfectly and translated it into a beautiful, functional website that our clients love.'
    }
  ];

  // Duplicate for seamless scroll
  const scrollReviews = [...reviews, ...reviews];

  return (
    <section id="testimonial" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <Motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-[#F8F9FA] border border-gray-100 px-3 py-1 rounded-md mb-4"
          >
            <img src={aboutIcon} alt="testimonial" className="w-4 h-4" />
            <span className="text-[12px] font-bold text-slate-700 uppercase tracking-tight">Testimonial</span>
          </Motion.div>
          
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-6xl font-bold text-slate-900 mb-6"
          >
            What Our Clients are Saying
          </Motion.h2>
          
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-400 text-sm leading-relaxed px-4"
          >
            Hear directly from our clients about their experiences and the results we've delivered. Explore Client Feedback
          </Motion.p>
        </div>

        {/* --- Auto-Scrolling Cards --- */}
        <div className="relative flex">
          <Motion.div 
            className="flex gap-6 lg:gap-8 cursor-grab active:cursor-grabbing"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 40, // Adjust speed here
              repeat: Infinity,
            }}
            /* Pause on Hover */
            whileHover={{ animationPlayState: "paused" }}
          >
            {scrollReviews.map((review, i) => (
              <div 
                key={i} 
                className="w-[350px] lg:w-[450px] flex-shrink-0 bg-[#F8F9FA] p-8 lg:p-10 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between"
              >
                {/* Top Section: Stars and Quote */}
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, idx) => (
                      <Star 
                        key={idx} 
                        size={16} 
                        fill={idx < review.stars ? "black" : "none"} 
                        className={idx < review.stars ? "text-black" : "text-gray-300"} 
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mb-8">
                    "{review.text}"
                  </p>
                </div>

                {/* Bottom Section: Divider and Profile */}
                <div>
                  <div className="w-full border-t border-dashed border-gray-300 mb-8" />
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      className="w-14 h-14 rounded-full border-2 border-[#F8F9FA] shadow-sm"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 leading-tight">{review.name}</h4>
                      <p className="text-xs text-gray-400 font-medium">{review.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Motion.div>
        </div>

        {/* --- Custom Pagination (Purely Visual like the Image) --- */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-6 h-2 rounded-full bg-[#CFFE25]" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
          <div className="w-2 h-2 rounded-full bg-gray-200" />
        </div>

      </div>
    </section>
  );
};

export default Testimonials;