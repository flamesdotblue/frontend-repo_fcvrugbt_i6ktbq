import React from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = [
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'burger', label: 'Burger', emoji: '🍔' },
  { id: 'indian', label: 'Indian', emoji: '🍛' },
  { id: 'desserts', label: 'Desserts', emoji: '🍰' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
  { id: 'healthy', label: 'Healthy', emoji: '🥗' },
];

const CategoryBar = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
        <input
          type="text"
          placeholder="Search for restaurants or dishes…"
          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-neutral-50 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-200 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-400/60 focus:border-orange-300"
        />
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto no-scrollbar pb-1">
        {categories.map((c) => (
          <motion.button
            key={c.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 px-4 py-2 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:border-orange-300 hover:text-orange-600"
          >
            <span className="mr-2">{c.emoji}</span>
            {c.label}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default CategoryBar;
