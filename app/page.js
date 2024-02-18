'use client';

import { useState } from 'react';
import CategoryBar from './ui/faqs/categorybar';
import { categories } from './ui/lib/data';
import Overlay from './ui/faqs/overlay';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategoryBarClick(categoryId) {
    setShowOverlay(true);
    setSelectedCategory(categoryId);
  }

  function handleCloseOverlayClick() {
    setShowOverlay(false);
    setSelectedCategory(null);
  }

  return (
    <div className="flex flex-col items-center">
      {categories.map((category, index) => {
        return (
          <div key={category.id}>
            {index !== 0 && <div className="mt-4"></div>}
            <CategoryBar
              name={category.name}
              onClick={() => {
                handleCategoryBarClick(category);
              }}
            />
          </div>
        );
      })}
      {showOverlay && (
        <Overlay
          category={selectedCategory}
          onCloseButtonClick={handleCloseOverlayClick}
        />
      )}
    </div>
  );
}
