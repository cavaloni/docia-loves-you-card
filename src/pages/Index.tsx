
import Card from '../components/Card';

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-cursive text-primary">Happy Mother's Day</h1>
          <p className="text-gray-600 mt-2">A special message for a wonderful mom</p>
        </div>
        
        <Card />
        
        <div className="text-center mt-16">
          <p className="text-sm text-gray-500">Made with love for Docia Vagnerini</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
