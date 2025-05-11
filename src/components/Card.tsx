
import { useState } from 'react';
import CardContent from './CardContent';
import { Heart, Flower, Star, Cake } from 'lucide-react';

const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-container w-full max-w-4xl mx-auto">
      <div className={`card-inner relative ${isOpen ? 'open' : 'closed'}`} onClick={toggleCard}>
        {/* Card Cover - shown when closed */}
        {!isOpen && (
          <div className="card-front bg-mothersDay-pink rounded-lg shadow-lg p-8 cursor-pointer transition-all duration-500">
            <div className="flex flex-col items-center justify-center min-h-[500px] border-4 border-white bg-gradient-to-br from-mothersDay-pink via-white to-mothersDay-peach p-6 rounded-md shadow-inner">
              <div className="absolute top-4 right-4">
                <Heart className="text-red-500 animate-heart-beat" size={28} />
              </div>
              <div className="absolute top-4 left-4">
                <Flower className="text-purple-400 animate-float" size={28} />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-cursive text-primary mb-4 animate-float">For Me Ma</h2>
              <div className="w-32 h-32 rounded-full border-4 border-white bg-mothersDay-lavender flex items-center justify-center mb-6 shadow-lg">
                <h1 className="text-3xl font-handwriting text-purple-700">Dodie</h1>
              </div>
              <p className="text-xl font-elegant text-gray-700">Happy Mother's Day</p>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500 italic">Click to open</p>
              </div>
              
              <div className="absolute bottom-4 right-4">
                <Cake className="text-pink-400 animate-float" size={28} />
              </div>
              <div className="absolute bottom-4 left-4">
                <Heart className="text-red-500 animate-heart-beat" size={28} />
              </div>
            </div>
          </div>
        )}
        
        {/* Card Inside - shown when open */}
        {isOpen && (
          <div className="card-inside bg-white rounded-lg shadow-lg p-8 animate-card-open">
            <div className="min-h-[500px] border-4 border-mothersDay-lavender bg-gradient-to-br from-mothersDay-lavender/20 to-white p-6 rounded-md flex items-center justify-center">
              <CardContent isVisible={isOpen} />
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
