import * as React from "react";

function SvgHero(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="hero_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <g>
          <mask id="hero_svg__b" fill="#fff">
            <use xlinkHref="#hero_svg__a" />
          </mask>
          <g mask="url(#hero_svg__b)">
            <g transform="translate(-1 -1)">
              <path fill="#FFF" d="M1 1h280v126H1z" />
              <path strokeOpacity={0.04} stroke="#000" d="M.5.5h281v127H.5z" />
              <rect fill="#6B7280" x={95} y={43} width={92} height={4} rx={2} />
              <rect
                fill="#6B7280"
                x={79}
                y={53}
                width={124}
                height={4}
                rx={2}
              />
              <rect fill="#D2D6DC" x={93} y={65} width={95} height={2} rx={1} />
              <rect
                fill="#D2D6DC"
                x={91}
                y={71}
                width={100}
                height={2}
                rx={1}
              />
              <rect fill="#D2D6DC" x={97} y={77} width={88} height={2} rx={1} />
              <rect
                fill="#4B5563"
                x={98}
                y={89}
                width={40}
                height={12}
                rx={3}
              />
              <rect
                fill="#9FA6B2"
                x={109}
                y={94}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#E5E7EB"
                x={144}
                y={89}
                width={40}
                height={12}
                rx={3}
              />
              <rect
                fill="#9FA6B2"
                x={155}
                y={94}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#6B7280"
                x={31}
                y={17}
                width={10}
                height={10}
                rx={5}
              />
              <rect
                fill="#9FA6B2"
                x={235}
                y={21}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fill="#9FA6B2"
                x={211}
                y={21}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fill="#9FA6B2"
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
