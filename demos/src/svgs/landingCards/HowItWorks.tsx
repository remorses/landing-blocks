import * as React from "react";

function SvgHowItWorks(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 280 140" {...props}>
      <g fill="none" fillRule="evenodd">
        <path fill="#323452" d="M0 0h280v140H0z" />
        <path fill="#323452" d="M0 0h280v140H0z" />
        <g transform="translate(66 4)" fill="#FFF">
          <rect fillOpacity={0.652} x={10} y={9} width={28} height={2} rx={1} />
          <rect fillOpacity={0.354} y={14} width={56} height={2} rx={1} />
          <rect fillOpacity={0.354} y={19} width={52} height={2} rx={1} />
          <rect fillOpacity={0.354} y={24} width={39} height={2} rx={1} />
          <rect fillOpacity={0.354} y={29} width={7} height={2} rx={1} />
          <path
            d="M79 5a3 3 0 013-3h62a3 3 0 013 3v31H79V5z"
            fillOpacity={0.371}
          />
          <path
            fillOpacity={0.652}
            d="M3.187 12V4.37h-.108L.78 5.995V4.542L3.193 2.84h1.415V12z"
          />
        </g>
        <g transform="matrix(-1 0 0 1 213 50)" fill="#FFF">
          <rect fillOpacity={0.652} x={14} y={7} width={28} height={2} rx={1} />
          <rect fillOpacity={0.354} y={12} width={56} height={2} rx={1} />
          <rect fillOpacity={0.354} y={17} width={52} height={2} rx={1} />
          <rect fillOpacity={0.354} y={22} width={39} height={2} rx={1} />
          <rect fillOpacity={0.354} y={27} width={7} height={2} rx={1} />
          <path
            d="M79 3a3 3 0 013-3h62a3 3 0 013 3v31H79V3z"
            fillOpacity={0.371}
          />
          <path
            d="M53.246 2.87c0-.843-.288-1.532-.863-2.067C51.807.268 51.069 0 50.167 0c-.871 0-1.593.248-2.164.743a2.372 2.372 0 00-.857 1.872c0 .487.143.968.428 1.444.286.476.812 1.102 1.578 1.876l2.037 2.063v.108H47v1.276h6.17V8.354l-3.098-3.225c-.61-.635-1.015-1.114-1.218-1.438a1.848 1.848 0 01-.305-.993c0-.42.159-.768.476-1.048.317-.279.713-.419 1.187-.419.503 0 .91.15 1.222.451.31.3.466.696.466 1.187v.02h1.346v-.02z"
            fillOpacity={0.652}
          />
        </g>
        <g transform="translate(66 97)" fill="#FFF">
          <rect fillOpacity={0.652} x={10} y={7} width={28} height={2} rx={1} />
          <rect fillOpacity={0.354} y={12} width={56} height={2} rx={1} />
          <rect fillOpacity={0.354} y={17} width={52} height={2} rx={1} />
          <rect fillOpacity={0.354} y={22} width={39} height={2} rx={1} />
          <rect fillOpacity={0.354} y={27} width={7} height={2} rx={1} />
          <path
            d="M79 3a3 3 0 013-3h62a3 3 0 013 3v31H79V3z"
            fillOpacity={0.371}
          />
          <path
            d="M2.99 5.887V4.712H4.1c.491 0 .891-.135 1.2-.406.31-.27.464-.622.464-1.054 0-.427-.15-.769-.451-1.025-.3-.256-.7-.384-1.2-.384s-.902.13-1.209.387c-.307.259-.48.614-.517 1.067H1.035c.046-.83.349-1.483.907-1.962C2.501.857 3.24.618 4.158.618c.85 0 1.564.232 2.142.695.578.464.867 1.04.867 1.73 0 .537-.148.997-.442 1.377-.294.381-.693.629-1.196.743v.108c.622.072 1.113.308 1.472.708.36.4.54.906.54 1.52 0 .512-.146.975-.438 1.39-.292.415-.695.74-1.21.978a4.038 4.038 0 01-1.71.355c-.96 0-1.744-.247-2.352-.743C1.224 8.984.9 8.33.857 7.512h1.365c.046.444.246.797.6 1.06.353.262.807.393 1.361.393.559 0 1.016-.144 1.371-.431.356-.288.533-.658.533-1.111 0-.474-.173-.849-.52-1.124-.347-.275-.821-.412-1.422-.412H2.99z"
            fillOpacity={0.652}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgHowItWorks;
