
import { useState } from 'react';
import CardContent from './CardContent';
import { Heart, Flower } from 'lucide-react';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container w-full max-w-4xl mx-auto">
      <div className={`card-inner relative ${isOpen ? 'open' : 'closed'}`} onClick={toggleCard}>
        {/* Card Cover */}
        <div className="card-front card-face bg-mothersDay-pink rounded-lg shadow-lg p-8 cursor-pointer">
          <div className="flex flex-col items-center justify-center min-h-[500px] border-4 border-white bg-gradient-to-br from-mothersDay-pink via-white to-mothersDay-peach p-6 rounded-md shadow-inner">
            <div className="absolute top-4 right-4">
              <Heart className="text-red-500 animate-heart-beat" size={28} />
            </div>
            <div className="absolute top-4 left-4">
              <Flower className="text-purple-400 animate-float" size={28} />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-cursive text-primary mb-4 animate-float">For Mom</h2>
            <div className="w-32 h-32 rounded-full border-4 border-white bg-mothersDay-lavender flex items-center justify-center mb-6 shadow-lg">
              <h1 className="text-3xl font-handwriting text-purple-700">Docia</h1>
            </div>
            <p className="text-xl font-elegant text-gray-700">Happy Mother's Day</p>
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-500 italic">Click to open</p>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <Flower className="text-pink-400 animate-float" size={28} />
            </div>
            <div className="absolute bottom-4 left-4">
              <Heart className="text-red-500 animate-heart-beat" size={28} />
            </div>
          </div>
        </div>
        
        {/* Card Inside (Left Page) */}
        <div className="card-back card-face bg-white rounded-lg shadow-lg p-8">
          <div className="min-h-[500px] border-l-4 border-mothersDay-lavender bg-gradient-to-br from-mothersDay-lavender/20 to-white p-6 rounded-md flex items-center justify-center">
            <CardContent isVisible={isOpen} />
          </div>
        </div>
        
        {/* Card Inside (Right Page - appears when opened) */}
        {isOpen && (
          <div className="absolute top-0 left-full w-full min-h-[500px] bg-white rounded-lg shadow-lg p-8">
            <div className="min-h-[500px] border-r-4 border-mothersDay-peach bg-gradient-to-bl from-mothersDay-peach/20 to-white p-6 rounded-md flex items-center justify-center">
              <div className="card-content">
                <div className="text-center">
                  <h3 className="text-3xl font-handwriting text-primary mb-6">A Poem for You</h3>
                  <div className="text-lg font-elegant text-gray-700 space-y-4">
                    <p>In your arms, I found my first home,</p>
                    <p>In your words, wisdom that has grown.</p>
                    <p>In your smile, the sunshine of my days,</p>
                    <p>In your love, a shelter in so many ways.</p>
                    <p>For all you are and all you do,</p>
                    <p>Mom, my heart is filled with love for you.</p>
                  </div>
                  <div className="mt-10">
                    <p className="text-xl font-cursive text-primary">With all my love,</p>
                    <p className="text-lg font-handwriting text-gray-700 mt-2">Your child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="text-center mt-8">
        <button 
          onClick={toggleCard}
          className="px-6 py-2 bg-primary text-white rounded-full shadow-md hover:bg-primary/80 transition-colors font-medium"
        >
          {isOpen ? 'Close Card' : 'Open Card'}
        </button>
      </div>
    </div>
  );
};

export default Card;
