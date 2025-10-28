import React, { useState } from 'react';
import { ShoppingCart, User, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [dark, setDark] = useState(false);
  const [cartCount, setCartCount] = useState(1);

  const toggleTheme = () => {
    setDark((d) => !d);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  const bumpCart = () => {
    setCartCount((c) => c + 1);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60 bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-md grid place-items-center text-white font-black">🍽️</div>
          <div className="leading-tight">
            <h1 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight">BiteBuddy</h1>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">Love at first bite</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            {dark ? <Sun className="h-5 w-5 text-amber-500" /> : <Moon className="h-5 w-5 text-amber-500" />}
          </button>

          <button className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition shadow-sm">
            <User className="h-4 w-4" /> Login / Sign up
          </button>

          <motion.button
            onClick={bumpCart}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white text-sm font-semibold shadow-md"
          >
            <ShoppingCart className="h-4 w-4" /> Cart
            <AnimatePresence>
              <motion.span
                key={cartCount}
                initial={{ scale: 0.6, opacity: 0, y: -6 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.6, opacity: 0, y: -6 }}
                className="ml-1 inline-flex items-center justify-center h-5 min-w-[1.25rem] px-1 rounded-full bg-white/90 text-orange-600 text-xs font-bold"
              >
                {cartCount}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
