import {JSX} from 'preact';

export function AppIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="app-icon"
      viewBox="0 0 256 256"
      stroke="green"
      fill="none">
      <rect className="app-icon__box" x="32" y="48" width="180" height="180" stroke-width="16" rx="16" />
      <g className="app-icon__check">
        <line x1="72" y1="136" x2="128" y2="196" stroke-width="24" stroke-linecap="round" />
        <line x1="128" y1="196" x2="256" y2="32" stroke-width="24" stroke-linecap="round" />
      </g>
    </svg>
  );
}
