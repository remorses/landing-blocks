import * as React from "react";

function SvgSectionTitle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <path
          d="M50 47a4 4 0 014-4h172a4 4 0 014 4v46a4 4 0 01-4 4H54a4 4 0 01-4-4V47z"
          fill="#FFF"
        />
        <path
          d="M226 42.5H54a4.5 4.5 0 00-4.5 4.5v46a4.5 4.5 0 004.5 4.5h172a4.5 4.5 0 004.5-4.5V47a4.5 4.5 0 00-4.5-4.5z"
          strokeOpacity={0.04}
          stroke="#000"
        />
        <rect fill="#4B5563" x={58} y={79} width={24} height={10} rx={3} />
        <rect fill="#E5E7EB" x={86} y={79} width={24} height={10} rx={3} />
        <rect fill="#6B7280" x={58} y={51} width={76} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={58} y={59} width={160} height={2} rx={1} />
        <rect fill="#D2D6DC" x={58} y={64} width={164} height={2} rx={1} />
        <rect fill="#D2D6DC" x={58} y={69} width={132} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgSectionTitle;
