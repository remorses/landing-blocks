import * as React from "react";

function SvgNewsletter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <g transform="translate(29 30)">
          <rect fill="#FFF" x={1} y={1} width={220} height={78} rx={4} />
          <rect
            strokeOpacity={0.04}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={221}
            height={79}
            rx={4.5}
          />
        </g>
        <rect fill="#6B7280" x={94} y={61} width={92} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={93} y={68} width={94} height={2} rx={1} />
        <rect fill="#D2D6DC" x={98} y={73} width={84} height={2} rx={1} />
        <rect fill="#4B5563" x={160} y={83} width={30} height={12} rx={3} />
        <rect fill="#9FA6B2" x={168} y={88} width={14} height={2} rx={1} />
        <g transform="translate(89 82)">
          <rect fill="#FFF" x={1} y={1} width={66} height={12} rx={3} />
          <rect
            strokeOpacity={0.1}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={67}
            height={13}
            rx={3.5}
          />
        </g>
        <path
          d="M133.084 44.424L140 47.882l6.916-3.458A2.002 2.002 0 00145 43h-10c-.904 0-1.668.6-1.916 1.424zM147 46.618l-7 3.5-7-3.5V51a2 2 0 002 2h10a2 2 0 002-2v-4.382z"
          fill="#D2D6DC"
        />
      </g>
    </svg>
  );
}

export default SvgNewsletter;
