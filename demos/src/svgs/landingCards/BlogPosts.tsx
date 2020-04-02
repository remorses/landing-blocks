import * as React from "react";

function SvgBlogPosts(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <g transform="translate(29 48)">
          <rect fill="#FFF" x={1} y={1} width={68} height={68} rx={4} />
          <rect
            strokeOpacity={0.04}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={69}
            height={69}
            rx={4.5}
          />
        </g>
        <g transform="translate(105 48)">
          <rect fill="#FFF" x={1} y={1} width={68} height={68} rx={4} />
          <rect
            strokeOpacity={0.04}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={69}
            height={69}
            rx={4.5}
          />
        </g>
        <g transform="translate(181 48)">
          <rect fill="#FFF" x={1} y={1} width={68} height={68} rx={4} />
          <rect
            strokeOpacity={0.04}
            stroke="#000"
            x={0.5}
            y={0.5}
            width={69}
            height={69}
            rx={4.5}
          />
        </g>
        <rect fill="#6B7280" x={112} y={89} width={44} height={2} rx={1} />
        <rect fill="#6B7280" x={188} y={89} width={44} height={2} rx={1} />
        <rect fill="#D2D6DC" x={112} y={94} width={56} height={2} rx={1} />
        <rect fill="#D2D6DC" x={188} y={94} width={56} height={2} rx={1} />
        <rect fill="#D2D6DC" x={112} y={99} width={52} height={2} rx={1} />
        <rect fill="#D2D6DC" x={188} y={99} width={52} height={2} rx={1} />
        <rect fill="#D2D6DC" x={112} y={104} width={39} height={2} rx={1} />
        <rect fill="#D2D6DC" x={188} y={104} width={39} height={2} rx={1} />
        <rect fill="#9FA6B2" x={112} y={109} width={7} height={2} rx={1} />
        <rect fill="#9FA6B2" x={188} y={109} width={7} height={2} rx={1} />
        <path
          d="M30 52a3 3 0 013-3h62a3 3 0 013 3v31H30V52zM106 52a3 3 0 013-3h62a3 3 0 013 3v31h-68V52zM182 52a3 3 0 013-3h62a3 3 0 013 3v31h-68V52z"
          fill="#E5E7EB"
        />
        <rect fill="#6B7280" x={36} y={89} width={44} height={2} rx={1} />
        <rect fill="#D2D6DC" x={36} y={94} width={56} height={2} rx={1} />
        <rect fill="#D2D6DC" x={36} y={99} width={52} height={2} rx={1} />
        <rect fill="#D2D6DC" x={36} y={104} width={39} height={2} rx={1} />
        <rect fill="#9FA6B2" x={36} y={109} width={7} height={2} rx={1} />
        <rect fill="#6B7280" x={103} y={23} width={76} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={85} y={30} width={111} height={2} rx={1} />
        <rect fill="#D2D6DC" x={91} y={35} width={100} height={2} rx={1} />
      </g>
    </svg>
  );
}

export default SvgBlogPosts;
