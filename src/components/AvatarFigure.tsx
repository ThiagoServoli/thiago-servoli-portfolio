import { useId } from "react";

/**
 * Avatar ilustrado do Thiago (SVG vetorial, poucos KB). As camadas têm classes
 * próprias (ver "Avatar" em globals.css) para criar o efeito de giro de cabeça
 * por paralaxe a partir das variáveis CSS --lx / --ly (-1 a 1), além de piscar,
 * respirar e acenar (data-pose="wave" no elemento pai).
 */
export default function AvatarFigure({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  const ref = (name: string) => `${name}-${id}`;
  const url = (name: string) => `url(#${ref(name)})`;

  return (
    <svg viewBox="0 0 200 250" className={className} aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={ref("skin")} cx="44%" cy="38%" r="68%">
          <stop offset="0" stopColor="#F3CBAE" />
          <stop offset="0.55" stopColor="#E2AE8E" />
          <stop offset="1" stopColor="#C68B6B" />
        </radialGradient>
        <linearGradient id={ref("shirt")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2B2B37" />
          <stop offset="1" stopColor="#111118" />
        </linearGradient>
        <radialGradient id={ref("hair")} cx="50%" cy="25%" r="75%">
          <stop offset="0" stopColor="#3D3438" />
          <stop offset="1" stopColor="#1B1619" />
        </radialGradient>
        <linearGradient id={ref("beard")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#47372F" />
          <stop offset="0.3" stopColor="#2B211E" />
          <stop offset="1" stopColor="#1A1413" />
        </linearGradient>
        <clipPath id={ref("eyeL")}>
          <ellipse cx="82" cy="114" rx="7.5" ry="4.6" />
        </clipPath>
        <clipPath id={ref("eyeR")}>
          <ellipse cx="118" cy="114" rx="7.5" ry="4.6" />
        </clipPath>
      </defs>

      <g className="av-body">
        <path d="M14 250 C16 214 40 196 74 190 L126 190 C160 196 184 214 186 250 Z" fill={url("shirt")} />
        <path d="M78 191 C86 203 114 203 122 191" fill="none" stroke="#3a3a48" strokeWidth="4" />
        <path d="M80 158 L120 158 L122 192 C112 201 88 201 78 192 Z" fill="#C68B6B" />
        <ellipse cx="100" cy="168" rx="23" ry="7" fill="#A86F52" opacity="0.55" />

        {/* Braço do aceno: escondido atrás do ombro na pose padrão */}
        <g className="av-arm">
          <g className="av-forearm">
            <line x1="177" y1="182" x2="176" y2="141" stroke="#D49C7B" strokeWidth="12" strokeLinecap="round" />
            <g stroke="#E2AE8E" strokeWidth="5" strokeLinecap="round">
              <line x1="170" y1="128" x2="167.5" y2="115" />
              <line x1="174.5" y1="125" x2="173.5" y2="110" />
              <line x1="179" y1="125" x2="180" y2="111" />
              <line x1="183" y1="128" x2="186" y2="117" />
              <line x1="169" y1="136" x2="162" y2="129" />
            </g>
            <circle cx="176.5" cy="133" r="9" fill="#E2AE8E" />
          </g>
          <line x1="158" y1="222" x2="178" y2="186" stroke="#20202A" strokeWidth="22" strokeLinecap="round" />
        </g>

        <g className="av-head">
          <g className="av-ears">
            <ellipse cx="56" cy="117" rx="8.5" ry="13.5" fill="#D9A282" />
            <path d="M58 109 C53 113 53 121 58 125" fill="none" stroke="#B57A5B" strokeWidth="2" strokeLinecap="round" />
            <ellipse cx="144" cy="117" rx="8.5" ry="13.5" fill="#D9A282" />
            <path d="M142 109 C147 113 147 121 142 125" fill="none" stroke="#B57A5B" strokeWidth="2" strokeLinecap="round" />
          </g>

          <ellipse cx="100" cy="112" rx="45" ry="55" fill={url("skin")} />
          <ellipse cx="92" cy="80" rx="20" ry="9" fill="#fff" opacity="0.12" />

          <g className="av-hair">
            <path
              d="M55.5 104 C50 70 72 51 100 51 C128 51 150 70 144.5 104 C142.5 94 139 87 133 84 C123 79 112 82 100 80 C88 82 77 79 67 84 C61 87 57.5 94 55.5 104 Z"
              fill={url("hair")}
            />
            <path
              d="M55.4 96 C57.5 95 60 95.5 61.5 97 C61.8 103 61 109 58.5 114 L55.3 110 Z M144.6 96 C142.5 95 140 95.5 138.5 97 C138.2 103 139 109 141.5 114 L144.7 110 Z"
              fill="#2A2020"
            />
          </g>

          <g className="av-beard">
            <path
              d="M55.5 106 C54 141 66 168 86 176.5 C95 180.5 105 180.5 114 176.5 C134 168 146 141 144.5 106 C143 120 139 130 131 135 C124 139 116 140.5 100 141 C84 140.5 76 139 69 135 C61 130 57 120 55.5 106 Z"
              fill={url("beard")}
            />
            <path
              d="M55.5 106 C57 120 61 130 69 135 C76 139 84 140.5 100 141 C116 140.5 124 139 131 135 C139 130 143 120 144.5 106"
              fill="none"
              stroke="#3A2D29"
              strokeWidth="2.5"
              opacity="0.5"
            />
          </g>

          <g className="av-face">
            <path d="M69.5 104 C75 98.5 84 97.5 92.5 101 L92 104.6 C84 101.8 76 102.8 71 107 Z" fill="#1E1718" />
            <path d="M130.5 104 C125 98.5 116 97.5 107.5 101 L108 104.6 C116 101.8 124 102.8 129 107 Z" fill="#1E1718" />

            <ellipse cx="82" cy="114" rx="7.5" ry="4.6" fill="#FBF6F1" />
            <ellipse cx="118" cy="114" rx="7.5" ry="4.6" fill="#FBF6F1" />
            <g clipPath={url("eyeL")}>
              <g className="av-iris">
                <circle cx="82" cy="114.3" r="3.9" fill="#4A2C1C" />
                <circle cx="82" cy="114.3" r="1.9" fill="#120b07" />
                <circle cx="83.3" cy="113" r="1" fill="#fff" />
              </g>
              <ellipse className="av-lid" cx="82" cy="114" rx="8" ry="5" fill="#DCA787" />
            </g>
            <g clipPath={url("eyeR")}>
              <g className="av-iris">
                <circle cx="118" cy="114.3" r="3.9" fill="#4A2C1C" />
                <circle cx="118" cy="114.3" r="1.9" fill="#120b07" />
                <circle cx="119.3" cy="113" r="1" fill="#fff" />
              </g>
              <ellipse className="av-lid" cx="118" cy="114" rx="8" ry="5" fill="#DCA787" />
            </g>
            <path d="M74 113.5 C78 108 86 108 90 113.5" fill="none" stroke="#2A1C17" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M110 113.5 C114 108 122 108 126 113.5" fill="none" stroke="#2A1C17" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M75.5 119 C79 121.5 85 121.5 88.5 119" fill="none" stroke="#B9805F" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />
            <path d="M111.5 119 C115 121.5 121 121.5 124.5 119" fill="none" stroke="#B9805F" strokeWidth="1.2" opacity="0.6" strokeLinecap="round" />

            <path
              d="M100 113 C99.2 121 95.8 127.5 96.6 130.4 C98 132.6 102.2 132.6 103.6 130.4"
              fill="none"
              stroke="#B0735A"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path d="M103.5 116 C104.5 122 106.5 126.5 105.5 129" fill="none" stroke="#C68B6B" strokeWidth="1.4" opacity="0.6" strokeLinecap="round" />

            <path
              d="M82 143 C88 136.5 95 136.5 100 139.5 C105 136.5 112 136.5 118 143 C112 143.6 106 142.6 100 144.2 C94 142.6 88 143.6 82 143 Z"
              fill="#221A18"
            />
            <path d="M91 147.6 C95 152.4 105 152.4 109 147.6 C105 149.4 95 149.4 91 147.6 Z" fill="#B8776C" />
            <path d="M89.5 146.2 C95 149.2 105 149.2 110.5 146.2" fill="none" stroke="#6E4038" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </g>
      </g>
    </svg>
  );
}
