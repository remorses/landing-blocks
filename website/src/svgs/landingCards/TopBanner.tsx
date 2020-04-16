import * as React from "react";

function SvgTopBanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#323452" d="M0 0h280v140H0z" />
        <path fill="#323452" d="M0 0h280v140H0z" />
        <rect
          fillOpacity={0.61}
          fill="#FFF"
          x={30}
          y={58}
          width={220}
          height={24}
          rx={4}
        />
        <path
          d="M242 68l-4 4m4 0l-4-4"
          stroke="#323452"
          strokeLinecap="round"
        />
        <rect
          fillOpacity={0.354}
          fill="#FFF"
          x={56}
          y={69}
          width={104}
          height={2}
          rx={1}
        />
        <path
          d="M42.103 65.152a1.583 1.583 0 012.798 0l4.477 8.188c.602 1.1-.17 2.46-1.398 2.46h-8.956c-1.227 0-2-1.36-1.399-2.46l4.478-8.188zm2.201 8.172c0 .456-.36.826-.802.826a.814.814 0 01-.803-.826c0-.455.36-.825.803-.825.443 0 .802.37.802.825zm-.802-5.777a.802.802 0 00-.803.802v1.697a.802.802 0 101.605 0v-1.697a.802.802 0 00-.802-.802z"
          fillOpacity={0.354}
          fill="#FFF"
        />
      </g>
    </svg>
  );
}

export default SvgTopBanner;
