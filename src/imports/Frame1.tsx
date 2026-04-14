import svgPaths from "./svg-4xgi6uqahw";

interface Frame1Props {
  isWhite?: boolean;
}

export default function Frame1({ isWhite = true }: Frame1Props) {
  const fillColor = isWhite ? "#ffffff" : "#183B4E";
  
  return (
    <svg 
      className="w-full h-full" 
      fill="none" 
      viewBox="0 0 47 35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g>
          <path d={svgPaths.p7461200} fill={fillColor} />
          <path d={svgPaths.p2f203be0} fill={fillColor} />
          <path d={svgPaths.p2955ef2} fill={fillColor} />
          <path d={svgPaths.p31fe0b30} fill={fillColor} />
          <path d={svgPaths.p2ed11480} fill={fillColor} />
          <path d={svgPaths.p161c8900} fill={fillColor} />
          <path d={svgPaths.p3ef36e00} fill={fillColor} />
          <path d={svgPaths.p8936900} fill={fillColor} />
          <path d={svgPaths.p2acc12f2} fill={fillColor} />
          <path d={svgPaths.p16171780} fill={fillColor} />
          <path d={svgPaths.p233bcf00} fill={fillColor} />
        </g>
        <path d={svgPaths.p3c70c800} fill={fillColor} />
      </g>
    </svg>
  );
}
