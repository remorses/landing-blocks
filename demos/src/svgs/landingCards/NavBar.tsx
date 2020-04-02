import * as React from "react";

function SvgNavBar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="NavBar_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <g>
          <mask id="NavBar_svg__b" fill="#fff">
            <use xlinkHref="#NavBar_svg__a" />
          </mask>
          <g mask="url(#NavBar_svg__b)">
            <g transform="translate(-1 -1)">
              <path fill="#F4F5F7" d="M1 1h280v140H1z" />
              <path fill="#FFF" d="M1 1h280v16H1z" />
              <path strokeOpacity={0.04} stroke="#000" d="M.5.5h281v17H.5z" />
              <rect fill="#9FA6B2" x={94} y={8} width={16} height={2} rx={1} />
              <rect fill="#9FA6B2" x={120} y={8} width={16} height={2} rx={1} />
              <rect fill="#9FA6B2" x={146} y={8} width={16} height={2} rx={1} />
              <rect fill="#9FA6B2" x={172} y={8} width={16} height={2} rx={1} />
              <circle fill="#6B7280" cx={34} cy={9} r={3} />
              <circle fill="#9FA6B2" cx={248} cy={9} r={3} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgNavBar;
