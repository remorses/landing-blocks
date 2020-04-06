import * as React from "react";

function SvgBanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="banner_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#323452" d="M0 0h280v140H0z" />
        <mask id="banner_svg__b" fill="#fff">
          <use xlinkHref="#banner_svg__a" />
        </mask>
        <g mask="url(#banner_svg__b)">
          <path fill="#323452" d="M0 0h280v140H0z" />
          <path
            d="M30-1h220v101a4 4 0 01-4 4H34a4 4 0 01-4-4V-1z"
            fill="#323452"
          />
          <path
            d="M30-1.5h-.5V100a4.5 4.5 0 004.5 4.5h212a4.5 4.5 0 004.5-4.5V-1.5H30z"
            strokeOpacity={0.04}
            stroke="#FFF"
          />
          <g transform="translate(31 42)" fill="#FFF">
            <rect fillOpacity={0.61} width={220} height={44} rx={4} />
            <rect
              fillOpacity={0.354}
              x={20}
              y={11}
              width={88}
              height={2}
              rx={1}
            />
            <rect
              fillOpacity={0.163}
              x={7}
              y={10}
              width={8}
              height={9}
              rx={2}
            />
            <rect
              fillOpacity={0.354}
              x={20}
              y={23}
              width={88}
              height={2}
              rx={1}
            />
            <rect
              fillOpacity={0.354}
              x={20}
              y={17}
              width={57}
              height={2}
              rx={1}
            />
          </g>
        </g>
        <rect
          fillOpacity={0.61}
          fill="#FFF"
          x={217}
          y={73}
          width={30}
          height={9}
          rx={3}
        />
        <rect
          fillOpacity={0.354}
          fill="#FFF"
          x={225}
          y={77}
          width={14}
          height={1}
          rx={0.5}
        />
      </g>
    </svg>
  );
}

export default SvgBanner;
