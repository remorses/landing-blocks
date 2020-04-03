import * as React from "react";

function SvgHero(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="hero_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#323452" d="M0 0h280v140H0z" />
        <path fill="#323452" d="M0 0h280v140H0z" />
        <g>
          <mask id="hero_svg__b" fill="#fff">
            <use xlinkHref="#hero_svg__a" />
          </mask>
          <g mask="url(#hero_svg__b)">
            <g transform="translate(-1 -1)">
              <path fill="#323452" d="M1 1h280v126H1z" />
              <path strokeOpacity={0.04} stroke="#FFF" d="M.5.5h281v127H.5z" />
              <rect
                fillOpacity={0.652}
                fill="#FFF"
                x={95}
                y={43}
                width={92}
                height={4}
                rx={2}
              />
              <rect
                fillOpacity={0.652}
                fill="#FFF"
                x={79}
                y={53}
                width={124}
                height={4}
                rx={2}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={93}
                y={65}
                width={95}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={91}
                y={71}
                width={100}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={97}
                y={77}
                width={88}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.61}
                fill="#FFF"
                x={98}
                y={89}
                width={40}
                height={12}
                rx={3}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={109}
                y={94}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.371}
                fill="#FFF"
                x={144}
                y={89}
                width={40}
                height={12}
                rx={3}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={155}
                y={94}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.652}
                fill="#FFF"
                x={31}
                y={17}
                width={10}
                height={10}
                rx={5}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={235}
                y={21}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={211}
                y={21}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fillOpacity={0.354}
                fill="#FFF"
                x={187}
                y={21}
                width={16}
                height={2}
                rx={1}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgHero;
