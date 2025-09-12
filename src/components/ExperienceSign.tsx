import React from "react";

const ExperienceSign = () => (
  <svg
    viewBox="0 0 200 150"
    className="mx-auto mt-8 h-36 w-52"
    role="img"
    aria-label="35+ Years Industry Experience"
  >
    <line x1="100" y1="10" x2="40" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
    <line x1="100" y1="10" x2="160" y2="40" stroke="hsl(var(--border))" strokeWidth="2" />
    <circle cx="100" cy="10" r="4" fill="hsl(var(--border))" />
    <rect
      x="40"
      y="40"
      width="120"
      height="90"
      rx="8"
      fill="hsl(var(--card))"
      stroke="hsl(var(--border))"
      strokeWidth="2"
    />
    <text
      x="100"
      y="82"
      textAnchor="middle"
      fontSize="32"
      fontWeight="700"
      fill="hsl(var(--ibuild-red))"
    >
      35+
    </text>
    <text
      x="100"
      y="106"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="hsl(var(--muted-foreground))"
    >
      Years
    </text>
    <text
      x="100"
      y="124"
      textAnchor="middle"
      fontSize="14"
      fontWeight="600"
      fill="hsl(var(--foreground))"
    >
      Industry Experience
    </text>
  </svg>
);

export default ExperienceSign;

