import { useEffect } from "react";
import GreatWork from "../../components/GreatWork"; 

const Work = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
    
      <GreatWork />
    </div>
  );
};

export default Work;