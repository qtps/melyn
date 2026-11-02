import { useParams, Link } from "react-router-dom";
import { caseStudyData } from "../../data/caseStudyData";

const CaseStudyDetails = () => {
  const { id } = useParams(); 
  const data = caseStudyData[id?.toLowerCase()];

  
  if (!data) {
    return (
      <div className="w-full max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold">Case Study Not Found</h2>
        <Link to="/home/casestudy" className="text-blue-600 underline mt-4 inline-block">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 text-black">
      {/* 1. Header Title */}
      <h1 className="font-['Bebas_Neue'] text-7xl sm:text-9xl tracking-tight uppercase mb-6">
        {data.title}
      </h1>

      {/* 2. Metadata (Industry, Client, Location) */}
      <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-200 py-4 mb-10 text-xs sm:text-sm font-semibold uppercase tracking-wider">
        <div>
          <span className="text-gray-400 block mb-1">INDUSTRY</span>
          <span>{data.industry}</span>
        </div>
        <div>
          <span className="text-gray-400 block mb-1">CLIENT</span>
          <span>{data.client}</span>
        </div>
        <div>
          <span className="text-gray-400 block mb-1">LOCATION</span>
          <span>{data.location}</span>
        </div>
      </div>

      {/* 3. Main Hero Banner Image */}
      <div className="w-full h-87.5 sm:h-137.5 bg-neutral-900 rounded-xl overflow-hidden mb-12 flex items-center justify-center">
        {data.heroImage ? (
          <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-500 text-sm">[ Hero Image Placeholder ]</span>
        )}
      </div>

      {/* 4. Overview Text */}
      <div className="max-w-4xl mx-auto mb-16 text-xs sm:text-base font-semibold uppercase text-gray-800 leading-relaxed tracking-wide">
        <p>{data.overviewText}</p>
      </div>

      {/* 5. Challenge Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider uppercase mb-3">
          {data.challengeTitle}
        </h2>
        <p className="text-xs sm:text-base font-medium uppercase text-gray-600 leading-relaxed">
          {data.challengeText}
        </p>
      </div>

      {/* 6. Middle Feature Banner / Preview Image */}
      <div className="w-full h-75 sm:h-112.5 bg-neutral-900 rounded-xl overflow-hidden mb-16 flex items-center justify-center">
        <span className="text-gray-500 text-sm">[ Feature Image Placeholder ]</span>
      </div>

      {/* 7. Solutions Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="font-['Bebas_Neue'] text-3xl sm:text-4xl tracking-wider uppercase mb-3">
          {data.solutionsTitle}
        </h2>
        <p className="text-xs sm:text-base font-medium uppercase text-gray-600 leading-relaxed">
          {data.solutionsText}
        </p>
      </div>

      {/* 8. Bottom Grid Showcase (Two Columns Image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="h-62.5 sm:h-87.5 bg-neutral-900 rounded-xl flex items-center justify-center">
          <span className="text-gray-500 text-sm">[ Grid Image 1 ]</span>
        </div>
        <div className="h-62.5 sm:h-87.5 bg-neutral-900 rounded-xl flex items-center justify-center">
          <span className="text-gray-500 text-sm">[ Grid Image 2 ]</span>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetails;