import React from "react";

interface ExperienceSignProps {
  className?: string;
}

const ExperienceSign = ({ className = "mx-auto mt-8 h-48 w-64" }: ExperienceSignProps) => (
  <svg
    viewBox="0 0 200 150"
    className={className}
    role="img"
    aria-label="35+ Years Industry Experience"
  >
    <line x1="100" y1="0" x2="100" y2="10" stroke="hsl(var(--muted-foreground))" strokeWidth="2" />
    <circle cx="100" cy="10" r="5" fill="hsl(var(--muted-foreground))" />
    <line
      x1="100"
      y1="10"
      x2="20"
      y2="40"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="3"
    />
    <line
      x1="100"
      y1="10"
      x2="180"
      y2="40"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="3"
    />
    <rect
      x="15"
      y="40"
      width="170"
      height="100"
      rx="8"
      fill="hsl(var(--card))"
      stroke="hsl(var(--muted-foreground))"
      strokeWidth="2"
    />
    <text
      x="100"
      y="84"
      textAnchor="middle"
      fontSize="36"
      fontWeight="700"
      fill="hsl(var(--ibuild-red))"
    >
      40+
    </text>
    <text
      x="100"
      y="108"
      textAnchor="middle"
      fontSize="16"
      fontWeight="600"
      fill="hsl(var(--muted-foreground))"
    >
      Years
    </text>
    <text
      x="100"
      y="134"
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

