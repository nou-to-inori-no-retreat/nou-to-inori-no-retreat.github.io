import Image from "next/image";

type LogoProps = {
  className?: string;
  compact?: boolean;
  markOnly?: boolean;
  inverted?: boolean;
};

function Emblem({ inverted = false }: { inverted?: boolean }) {
  const water = inverted ? "#D8F5FF" : "#A8DCEB";
  const gold = "#C8A44D";
  const navy = inverted ? "#FFFFFF" : "#082A4A";
  const leaf = inverted ? "#CFE9D6" : "#54735C";

  return (
    <svg
      aria-label="水のサジタリオ エンブレム"
      className="h-14 w-14 shrink-0"
      role="img"
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="emblem-water" x1="18" x2="104" y1="26" y2="100">
          <stop stopColor={water} stopOpacity="0.96" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" fill={inverted ? "rgba(255,255,255,0.08)" : "#FFFFFF"} r="55" />
      <circle cx="60" cy="60" fill="none" r="54" stroke={navy} strokeWidth="2.6" />
      <path
        d="M25 71c9-8 17-8 27 0 9 7 18 7 28 0 7-5 13-7 20-5"
        fill="none"
        stroke="url(#emblem-water)"
        strokeLinecap="round"
        strokeWidth="7"
      />
      <path
        d="M28 82c8-5 15-5 23 0 8 5 17 5 25 0 7-4 14-5 21-2"
        fill="none"
        stroke={water}
        strokeLinecap="round"
        strokeOpacity="0.6"
        strokeWidth="3"
      />
      <path d="M33 60h54" fill="none" stroke={navy} strokeLinecap="round" strokeWidth="3.5" />
      <path d="M87 60 101 55 97 60 101 65 87 60Z" fill={leaf} stroke={navy} strokeWidth="1.3" />
      <path d="M34 60 22 52h15l-7 8 7 8H22l12-8Z" fill={navy} />
      <path d="M76 26c8 8 10 17 8 27-1 8 2 16 7 23" fill="none" stroke={navy} strokeLinecap="round" strokeWidth="4" />
      <path d="M76 94c8-8 10-17 8-27-1-8 2-16 7-23" fill="none" stroke={navy} strokeLinecap="round" strokeWidth="4" />
      <path d="M45 34 48 41l7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" fill={gold} opacity="0.96" />
      <circle cx="95" cy="35" fill={water} r="3" />
      <circle cx="29" cy="49" fill={navy} r="2.2" />
    </svg>
  );
}

export function Logo({
  className = "",
  compact = false,
  markOnly = false,
  inverted = false,
}: LogoProps) {
  if (markOnly) {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Emblem inverted={inverted} />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center ${className}`}>
      <div
        className={
          inverted
            ? "rounded-[1.25rem] border border-white/18 bg-white/96 px-3 py-2 shadow-soft"
            : "rounded-[1.25rem] bg-white px-2 py-1"
        }
      >
        <Image
          alt="水のサジタリオ ロゴ"
          className={compact ? "h-auto w-[7.8rem]" : "h-auto w-[11.5rem]"}
          height={180}
          src="/brand-logo.png"
          width={180}
        />
      </div>
    </div>
  );
}
