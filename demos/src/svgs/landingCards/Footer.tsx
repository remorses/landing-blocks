import * as React from "react";

function SvgFooter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <defs>
        <path id="footer_svg__a" d="M0 0h280v140H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="#FFF" d="M0 0h280v140H0z" />
        <path fill="#F4F5F7" d="M0 0h280v140H0z" />
        <g>
          <mask id="footer_svg__b" fill="#fff">
            <use xlinkHref="#footer_svg__a" />
          </mask>
          <g mask="url(#footer_svg__b)">
            <g transform="translate(-1 43)">
              <path fill="#FFF" d="M1 1h280v96H1z" />
              <path strokeOpacity={0.04} stroke="#000" d="M.5.5h281v97H.5z" />
              <rect fill="#9FA6B2" x={21} y={21} width={18} height={2} rx={1} />
              <rect fill="#D2D6DC" x={21} y={29} width={16} height={2} rx={1} />
              <rect fill="#D2D6DC" x={21} y={37} width={18} height={2} rx={1} />
              <rect fill="#D2D6DC" x={21} y={45} width={12} height={2} rx={1} />
              <rect fill="#D2D6DC" x={21} y={53} width={16} height={2} rx={1} />
              <rect fill="#D2D6DC" x={21} y={74} width={32} height={2} rx={1} />
              <rect fill="#9FA6B2" x={61} y={21} width={18} height={2} rx={1} />
              <rect fill="#D2D6DC" x={61} y={29} width={16} height={2} rx={1} />
              <rect fill="#D2D6DC" x={61} y={37} width={18} height={2} rx={1} />
              <rect fill="#D2D6DC" x={61} y={45} width={12} height={2} rx={1} />
              <rect fill="#D2D6DC" x={61} y={53} width={16} height={2} rx={1} />
              <rect
                fill="#9FA6B2"
                x={101}
                y={21}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={101}
                y={29}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={101}
                y={37}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={101}
                y={45}
                width={12}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={101}
                y={53}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fill="#9FA6B2"
                x={141}
                y={21}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={141}
                y={29}
                width={16}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={141}
                y={37}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={141}
                y={45}
                width={12}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={141}
                y={53}
                width={16}
                height={2}
                rx={1}
              />
              <path fill="#E5E7EB" d="M21 66h240v1H21z" />
              <rect
                fill="#9FA6B2"
                x={181}
                y={21}
                width={18}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={181}
                y={29}
                width={74}
                height={2}
                rx={1}
              />
              <rect
                fill="#D2D6DC"
                x={181}
                y={34}
                width={67}
                height={2}
                rx={1}
              />
              <g transform="translate(180 41)">
                <rect fill="#FFF" x={1} y={1} width={53} height={8} rx={2} />
                <rect
                  strokeOpacity={0.08}
                  stroke="#000"
                  x={0.5}
                  y={0.5}
                  width={54}
                  height={9}
                  rx={2.5}
                />
              </g>
              <path
                d="M237 44a3 3 0 013-3h18a3 3 0 013 3v4a3 3 0 01-3 3h-18a3 3 0 01-3-3v-4z"
                fill="#4B5563"
              />
              <circle fill="#D2D6DC" cx={222} cy={75} r={3} />
              <circle fill="#D2D6DC" cx={234} cy={75} r={3} />
              <circle fill="#D2D6DC" cx={246} cy={75} r={3} />
              <circle fill="#D2D6DC" cx={258} cy={75} r={3} />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgFooter;
