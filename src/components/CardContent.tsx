
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
        <div className="text-lg font-elegant text-gray-700 space-y-4">
          <p>On this special Mother's Day, I want you to know how deeply loved and appreciated you are.</p>
          <p>Your strength, your kindness, and your unwavering support have been the foundation of our family.</p>
          <p>Thank you for your endless patience, your wise guidance, and the countless sacrifices you've made.</p>
          <p>You are truly extraordinary, and I'm so grateful to call you Mom.</p>
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
