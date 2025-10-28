import React, { useState } from 'react';
import { Star, Clock, Bike, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const data = [
  {
    id: 'r1',
    name: 'Saffron Spice Kitchen',
    image:
      'https://images.unsplash.com/photo-1604908176997-431621b660d2?q=80&w=1200&auto=format&fit=crop',
    rating: 4.7,
    time: '25-35 min',
    cost: '$$',
    cuisine: 'Indian • Curry • Biryani',
    distance: '1.2 km',
  },
  {
    id: 'r2',
    name: 'Bella Napoli Pizzeria',
    image:
      'https://images.unsplash.com/photo-1548365328-9f547fb0953b?q=80&w=1200&auto=format&fit=crop',
    rating: 4.8,
    time: '20-30 min',
    cost: '$$'
    ,
    cuisine: 'Italian • Pizza • Pasta',
    distance: '0.9 km',
  },
  {
    id: 'r3',
    name: 'Green Bowl Kitchen',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6,
    time: '15-25 min',
    cost: '$$'
    ,
    cuisine: 'Healthy • Vegan • Salads',
    distance: '1.6 km',
  },
  {
    id: 'r4',
    name: 'Smash & Stack Burgers',
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5,
    time: '20-30 min',
    cost: '$'
    ,
    cuisine: 'American • Burgers • Fries',
    distance: '2.1 km',
  },
];

const RestaurantCard = ({ item }) => {
  const [fav, setFav] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-sm"
    >
      <div className="relative">
        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" loading="lazy" />
        <button
          onClick={() => setFav((f) => !f)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 text-rose-500 hover:bg-white"
          aria-label="Add to favorites"
        >
          <Heart className={`h-5 w-5 ${fav ? 'fill-current' : ''}`} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-extrabold text-neutral-900 dark:text-white text-lg leading-tight">{item.name}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.cuisine}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 border border-amber-200/60 dark:border-amber-500/20">
            <Star className="h-4 w-4" /> {item.rating}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20">
            <Clock className="h-4 w-4" /> {item.time}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-50 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
            <Bike className="h-4 w-4" /> {item.cost}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400">
          <MapPin className="h-4 w-4" /> {item.distance} away
        </div>
        <div className="mt-4">
          <motion.button
            whileTap={{ scale: 0.97 }}
            className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-sm hover:shadow"
          >
            View Menu
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const RestaurantList = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 mb-16">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white">Top Rated Near You</h2>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Curated picks with great taste and fast delivery</p>
        </div>
        <button className="text-sm font-medium text-emerald-700 dark:text-emerald-400 hover:underline">See all</button>
      </div>

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <RestaurantCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default RestaurantList;
