import { useState } from 'react';
import eyeIcon from '../assets/icons/eyes.svg';
import articleImg1 from '../assets/images/latest-article.png';
import articleImg2 from '../assets/images/latest-article-2.png';
import articleImg3 from '../assets/images/latest-article-3.png';

// Fallback / Dummy Data
const initialArticles = [
  {
    id: 1,
    title: "THE RISE OF HUMAN-CENTERED MARKETING IN A DIGITAL WORLD",
    date: "25 - 05 - 2025",
    image: articleImg1, 
  },
  {
    id: 2,
    title: "HOW TO RANK #1 ON GOOGLE SEO TIPS THAT ACTUALLY WORK",
    date: "21 - 04 - 2024",
    image: articleImg2,
  },
  {
    id: 3,
    title: "TRADITIONAL VS. DIGITAL MARKETING WHAT REALLY WORKS TODAY?",
    date: "19 - 02 - 2021",
    image: articleImg3, 
  },
];

const LatestArticle = ({ backendArticles = [] }) => {
  // 1. Determine articles array
  const articles = backendArticles.length > 0 ? backendArticles : initialArticles;

  // 2. Track hover state (selected article ID or image override)
  const [selectedImage, setSelectedImage] = useState(null);

  // 3. Derive active image directly during rendering (no useEffect needed)
  const activeImage = selectedImage || articles[0]?.image || '';

  if (!articles || articles.length === 0) return null;

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Side: Title & Dynamic Image */}
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          
          {/* Header Title with Responsive Sticker Icon */}
          <div className="relative inline-block mb-8 md:mb-12">
            <h2 className="text-4xl xs:text-5xl ms:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-black pr-12 ms:pr-16 md:pr-0">
              Latest <br /> Articles
            </h2>
            
            {/* Sticker Icon */}
            <div className="absolute -top-2 right-0 ms:right-2 mm:right-6 md:top-0 md:left-56 transform md:translate-x-4 -translate-y-2 pointer-events-none">
              <div className="w-14 h-14 xs:w-16 xs:h-16 ms:w-20 ms:h-20 mm:w-24 mm:h-24 md:w-36 md:h-36">
                <img 
                  src={eyeIcon} 
                  alt="Sticker Icon" 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          </div>

          {/* Changing Image Container */}
          <div className="w-full max-w-md aspect-4/3 rounded-sm overflow-hidden bg-gray-100 shadow-lg">
            <img
              src={activeImage}
              alt="Article Preview"
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />
          </div>
        </div>

        {/* Right Side: Articles List */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-gray-200">
          {articles.map((article) => (
            <div
              key={article.id || article._id}
              onMouseEnter={() => setSelectedImage(article.image)}
              className="py-6 ms:py-8 first:pt-0 last:pb-0 group cursor-pointer transition-colors duration-300"
            >
              <h3 className="text-lg xs:text-xl ms:text-2xl md:text-3xl font-extrabold uppercase leading-snug tracking-tight text-black group-hover:text-gray-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-xs ms:text-sm font-medium text-gray-500 mt-2 ms:mt-4">
                {article.date}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LatestArticle;