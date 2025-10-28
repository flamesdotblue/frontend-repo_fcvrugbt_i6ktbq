import React from 'react';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import PromoCarousel from './components/PromoCarousel';
import RestaurantList from './components/RestaurantList';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-cream-50 to-white dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-950">
      {/* Decorative background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-60 mix-blend-multiply">
        <div className="absolute -top-24 -left-24 h-72 w-72 bg-orange-300/30 blur-3xl rounded-full" />
        <div className="absolute top-24 -right-24 h-72 w-72 bg-emerald-300/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-96 bg-rose-300/20 blur-3xl rounded-full" />
      </div>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
              >
                Crave-worthy food, delivered with love
              </motion.h2>
              <p className="mt-3 text-neutral-600 dark:text-neutral-300 text-base">
                Discover nearby gems and trusted favorites. Fresh meals, comforting desserts, and energizing drinks — all in one place.
              </p>
              <div className="mt-5 flex gap-3">
                <motion.button whileTap={{ scale: 0.97 }} className="px-5 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 text-white font-semibold shadow-md">
                  Explore restaurants
                </motion.button>
                <motion.button whileTap={{ scale: 0.97 }} className="px-5 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 font-semibold">
                  Today’s specials
                </motion.button>
              </div>
            </div>

            <div className="relative aspect-[4/3] lg:aspect-[5/4] w-full rounded-3xl overflow-hidden shadow-lg border border-neutral-200/70 dark:border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1554331968-1b3e7b5d16cd?q=80&w=1600&auto=format&fit=crop"
                alt="Delicious food assortment"
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm">Handpicked restaurants with exceptional reviews</p>
              </div>
            </div>
          </div>
        </section>

        <CategoryBar />
        <PromoCarousel />
        <RestaurantList />
      </main>

      <footer className="mt-16 border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 text-sm text-neutral-500 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} BiteBuddy. Crafted with care.</span>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>•</span>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
