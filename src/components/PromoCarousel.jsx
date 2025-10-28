import React from 'react';
import { motion } from 'framer-motion';

const promos = [
  {
    id: 1,
    title: '20% off on first order',
    subtitle: 'Use code LOVE20',
    colors: 'from-orange-400 via-amber-400 to-rose-400',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 2,
    title: "Today’s Specials",
    subtitle: 'Handpicked with love',
    colors: 'from-emerald-400 via-green-400 to-teal-400',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Free delivery over $25',
    subtitle: 'Nearby favorites waiting',
    colors: 'from-rose-400 via-pink-400 to-fuchsia-400',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  },
];

const PromoCarousel = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
          {promos.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="snap-center shrink-0 w-[85%] sm:w-[420px] h-40 rounded-3xl relative overflow-hidden shadow-md"
            >
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${p.colors} mix-blend-multiply opacity-70`}></div>
              <div className="absolute inset-0 p-5 text-white flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold drop-shadow-sm">{p.title}</h3>
                  <p className="text-sm opacity-90">{p.subtitle}</p>
                </div>
                <motion.button
                  whileTap={{ scale: 0.96 }}
                  className="self-start px-4 py-2 rounded-full bg-white/90 text-neutral-900 text-sm font-semibold hover:bg-white"
                >
                  Order now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromoCarousel;
