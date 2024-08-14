import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-[#181818]">
      <div
        className="h-64 md:h-72 relative group"
        style={{ background: `url(${imgUrl}) no-repeat center center`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* Ajoutez des icônes ou du texte ici si nécessaire */}
          <div className="flex space-x-2">
        
          </div>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        {/* Ajoutez une description si nécessaire */}
        {description && <p className="text-sm">{description}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;
