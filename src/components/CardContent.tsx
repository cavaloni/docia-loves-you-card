
import { Heart, Flower, Star, Cake } from 'lucide-react';

interface CardContentProps {
  isVisible: boolean;
}

const CardContent = ({ isVisible }: CardContentProps) => {
  return (
    <div className={`card-content w-full ${isVisible ? 'animate-fade-in' : ''}`}>
      <div className="text-center relative">
        <div className="absolute -top-10 right-0">
          <Heart className="text-red-500 animate-heart-beat" size={24} />
        </div>
        <div className="absolute -top-6 left-0">
          <Flower className="text-purple-400 animate-float" size={24} />
        </div>
        
        <h2 className="text-3xl font-cursive text-primary mb-6">Dear Mom,</h2>
        
        <div className="flex flex-col items-center mb-6">
          <h3 className="text-2xl font-cursive text-primary mb-2">Happy Mother's Day!</h3>
          <div className="max-w-md w-full mx-auto mb-2">
            <img 
              src="/lovable-uploads/8db28a54-ae29-43e1-9579-54ad001f19da.png" 
              alt="Family photo" 
              className="w-full rounded-lg shadow-md border-4 border-mothersDay-pink"
            />
          </div>
          <p className="text-sm font-elegant text-gray-600 mt-2">Wish we could all be together</p>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="px-6 py-3 bg-mothersDay-cream rounded-lg shadow-sm">
            <p className="text-lg font-handwriting text-gray-700">I hope you enjoy your day!</p>
          </div>
        </div>
        
        <div className="mt-10">
          <p className="text-xl font-handwriting text-primary">I love you to the moon and back!</p>
        </div>
        
        <div className="absolute -bottom-10 left-0">
          <Heart className="text-red-500 animate-heart-beat" size={24} />
        </div>
        <div className="absolute -bottom-6 right-0">
          <Star className="text-yellow-400 animate-float" size={24} />
        </div>
      </div>
    </div>
  );
};

export default CardContent;
