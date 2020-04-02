import * as React from "react";

function SvgFaq(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <rect fill="#6B7280" x={30} y={54} width={68} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={30} y={61} width={98} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={66} width={102} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={71} width={90} height={2} rx={1} />
        <g transform="translate(140 54)">
          <rect fill="#6B7280" width={52} height={3} rx={1.5} />
          <rect fill="#D2D6DC" y={7} width={98} height={2} rx={1} />
          <rect fill="#D2D6DC" y={12} width={105} height={2} rx={1} />
          <rect fill="#D2D6DC" y={17} width={92} height={2} rx={1} />
          <rect fill="#6B7280" y={35} width={52} height={3} rx={1.5} />
          <rect fill="#D2D6DC" y={42} width={98} height={2} rx={1} />
          <rect fill="#D2D6DC" y={47} width={105} height={2} rx={1} />
          <rect fill="#D2D6DC" y={52} width={92} height={2} rx={1} />
        </g>
        <rect fill="#6B7280" x={30} y={89} width={68} height={3} rx={1.5} />
        <rect fill="#D2D6DC" x={30} y={96} width={98} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={101} width={102} height={2} rx={1} />
        <rect fill="#D2D6DC" x={30} y={106} width={90} height={2} rx={1} />
        <path fill="#E5E7EB" d="M30 45h220v1H30z" />
        <path
          d="M30.79 37h1.448v-3.398h3.325v-1.215h-3.325v-2.172h3.676V29H30.79v8zm6.473 0l.66-1.973h3.008L41.595 37h1.547l-2.82-8h-1.79l-2.816 8h1.547zm1.05-3.137l1.082-3.222h.063l1.082 3.222h-2.227zM50.968 33c0-2.586-1.578-4.11-3.676-4.11-2.102 0-3.676 1.524-3.676 4.11 0 2.582 1.574 4.11 3.676 4.11.508 0 .984-.09 1.418-.262l.66.84h1.406l-1.109-1.422c.805-.703 1.3-1.817 1.3-3.266zM46.8 34.313l1.082 1.421c-.188.051-.383.075-.59.075-1.3 0-2.219-.989-2.219-2.809 0-1.82.918-2.809 2.219-2.809 1.305 0 2.219.989 2.219 2.809 0 .984-.266 1.723-.719 2.195l-.68-.883H46.8z"
          fill="#4B5563"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgFaq;
