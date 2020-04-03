import * as React from "react";

function SvgFeature(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="feature_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="feature_svg__b" fill="#fff">
          <use xlinkHref="#feature_svg__a" />
        </mask>
        <g mask="url(#feature_svg__b)">
          <path fill="#323452" d="M0 0h280v140H0z" />
          <g transform="translate(30 56)" fill="#FFF">
            <rect fillOpacity={0.652} width={52} height={3} rx={1.5} />
            <rect fillOpacity={0.354} y={7} width={98} height={2} rx={1} />
            <rect fillOpacity={0.354} y={12} width={105} height={2} rx={1} />
            <rect fillOpacity={0.354} y={17} width={92} height={2} rx={1} />
            <rect fillOpacity={0.652} y={35} width={52} height={3} rx={1.5} />
            <rect fillOpacity={0.354} y={42} width={98} height={2} rx={1} />
            <rect fillOpacity={0.354} y={47} width={105} height={2} rx={1} />
            <rect fillOpacity={0.354} y={52} width={92} height={2} rx={1} />
          </g>
          <path
            d="M155 36.2c0-1.767.708-3.2 1.582-3.2h83.836c.874 0 1.582 1.433 1.582 3.2V117h-87V36.2z"
            fill="#323452"
          />
          <path
            d="M156.39 34h84.22c.767 0 1.39 1.25 1.39 2.793V117h-87V36.793c0-1.542.623-2.793 1.39-2.793z"
            strokeOpacity={0.354}
            stroke="#FFF"
          />
          <path fillOpacity={0.354} fill="#FFF" d="M0 15h280v1H0z" />
          <rect
            fillOpacity={0.652}
            fill="#FFF"
            x={30}
            y={44}
            width={30}
            height={4}
            rx={2}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgFeature;
