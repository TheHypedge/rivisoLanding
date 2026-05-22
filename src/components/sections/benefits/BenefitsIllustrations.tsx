interface IllustrationProps {
  className?: string;
}

function RolePill({
  label,
  color,
  x,
  y,
}: {
  label: string;
  color: string;
  x: number;
  y: number;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect x={0} y={0} width={label.length * 7.2 + 28} height={28} rx={14} fill={color} />
      <circle cx={14} cy={14} r={9} fill="white" fillOpacity={0.35} />
      <text
        x={30}
        y={18}
        fill="#0f172a"
        fontSize={11}
        fontWeight={600}
        fontFamily="system-ui, sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

export function LifecycleIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 520 360" fill="none" className={className} aria-hidden>
      <rect x={32} y={48} width={140} height={96} rx={10} fill="#fff" stroke="#cbd5e1" strokeWidth={1.5} />
      <text x={48} y={72} fill="#64748b" fontSize={11} fontWeight={600} fontFamily="system-ui">
        Blog Brief
      </text>
      <path d="M48 88h108M48 100h72M48 112h96" stroke="#e2e8f0" strokeWidth={6} strokeLinecap="round" />

      <rect x={348} y={64} width={140} height={96} rx={10} fill="#fff" stroke="#cbd5e1" strokeWidth={1.5} />
      <text x={364} y={88} fill="#64748b" fontSize={11} fontWeight={600} fontFamily="system-ui">
        Publish Draft
      </text>
      <path d="M364 104h108M364 116h64M364 128h88" stroke="#fdba74" strokeWidth={6} strokeLinecap="round" />

      <rect x={188} y={108} width={144} height={148} rx={12} fill="#fff" stroke="#ea580c" strokeWidth={2} />
      <text x={204} y={136} fill="#9a3412" fontSize={12} fontWeight={700} fontFamily="system-ui">
        Research Agent
      </text>
      <rect x={204} y={148} width={112} height={22} rx={4} fill="#fff7ed" />
      <text x={212} y={163} fill="#7c2d12" fontSize={10} fontFamily="system-ui">
        Keyword clustering
      </text>
      <rect x={204} y={178} width={112} height={22} rx={4} fill="#fff7ed" />
      <text x={212} y={193} fill="#7c2d12" fontSize={10} fontFamily="system-ui">
        SERP analysis
      </text>
      <rect x={204} y={208} width={112} height={22} rx={4} fill="#ffedd5" stroke="#fdba74" />
      <text x={212} y={223} fill="#9a3412" fontSize={10} fontWeight={600} fontFamily="system-ui">
        Outline generation
      </text>

      <path d="M172 96h16M340 112h8" stroke="#94a3b8" strokeWidth={1.5} strokeLinecap="round" markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth={6} markerHeight={6} refX={5} refY={3} orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#94a3b8" />
        </marker>
      </defs>

      <RolePill label="SEO Lead" color="#fde68a" x={24} y={200} />
      <RolePill label="Content Strategist" color="#bfdbfe" x={300} y={268} />
      <path d="M108 214l52 24M390 282l-58-40" stroke="#94a3b8" strokeWidth={1.25} strokeDasharray="4 3" />
    </svg>
  );
}

export function ScaleIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 520 360" fill="none" className={className} aria-hidden>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${48 + i * 108}, ${72 + (i % 2) * 12})`}>
          <rect width={92} height={120} rx={10} fill="#fff" stroke="#cbd5e1" strokeWidth={1.5} />
          <text x={12} y={24} fill="#64748b" fontSize={10} fontWeight={600} fontFamily="system-ui">
            Site {i + 1}
          </text>
          <rect x={12} y={36} width={68} height={8} rx={4} fill="#e2e8f0" />
          <rect
            x={12}
            y={56}
            width={20 + i * 14}
            height={48}
            rx={4}
            fill={i % 2 === 0 ? "#fdba74" : "#86efac"}
            fillOpacity={0.85}
          />
        </g>
      ))}
      <rect x={156} y={228} width={208} height={72} rx={12} fill="#0f172a" />
      <text x={176} y={256} fill="#f8fafc" fontSize={12} fontWeight={600} fontFamily="system-ui">
        Campaign throughput
      </text>
      <path
        d="M176 272h168M176 284h120"
        stroke="#475569"
        strokeWidth={8}
        strokeLinecap="round"
      />
      <text x={176} y={308} fill="#94a3b8" fontSize={10} fontFamily="system-ui">
        +340% output vs. manual workflows
      </text>
      <RolePill label="Growth Ops" color="#bbf7d0" x={320} y={48} />
    </svg>
  );
}

export function ContextIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 520 360" fill="none" className={className} aria-hidden>
      <circle cx={260} cy={168} r={52} fill="#fff7ed" stroke="#fdba74" strokeWidth={2} />
      <text x={232} y={164} fill="#9a3412" fontSize={12} fontWeight={700} fontFamily="system-ui">
        Riviso IQ
      </text>
      <text x={224} y={182} fill="#7c2d12" fontSize={10} fontFamily="system-ui">
        Brand + SEO context
      </text>

      {[
        { label: "Voice", x: 80, y: 80 },
        { label: "Competitors", x: 380, y: 72 },
        { label: "Style guide", x: 64, y: 248 },
        { label: "Entity map", x: 368, y: 256 },
      ].map((node) => (
        <g key={node.label}>
          <rect x={node.x} y={node.y} width={108} height={44} rx={22} fill="#fff" stroke="#e2e8f0" strokeWidth={1.5} />
          <text
            x={node.x + 54}
            y={node.y + 27}
            textAnchor="middle"
            fill="#334155"
            fontSize={11}
            fontWeight={600}
            fontFamily="system-ui"
          >
            {node.label}
          </text>
          <path
            d={`M${node.x + 54} ${node.y + 44} Q ${260} ${168} ${node.x + 54} ${node.y + 44}`}
            stroke="#fdba74"
            strokeWidth={1.25}
            opacity={0.6}
          />
        </g>
      ))}

      <path
        d="M134 124 Q200 148 208 168M386 116 Q320 140 312 168M142 248 Q200 200 212 188M374 256 Q320 210 308 188"
        stroke="#fdba74"
        strokeWidth={1.5}
        strokeDasharray="5 4"
      />
      <RolePill label="Editor" color="#e9d5ff" x={196} y={288} />
    </svg>
  );
}

export function QualityIllustration({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 520 360" fill="none" className={className} aria-hidden>
      <rect x={72} y={56} width={376} height={248} rx={14} fill="#fff" stroke="#e2e8f0" strokeWidth={1.5} />
      <text x={96} y={92} fill="#0f172a" fontSize={14} fontWeight={700} fontFamily="system-ui">
        Content quality score
      </text>

      <circle cx={160} cy={180} r={56} stroke="#ffedd5" strokeWidth={12} />
      <circle
        cx={160}
        cy={180}
        r={56}
        stroke="#ea580c"
        strokeWidth={12}
        strokeDasharray="280 360"
        strokeLinecap="round"
        transform="rotate(-90 160 180)"
      />
      <text x={160} y={186} textAnchor="middle" fill="#9a3412" fontSize={22} fontWeight={700} fontFamily="system-ui">
        94
      </text>

      {["Intent match", "Readability", "Entity coverage", "Internal links"].map((item, i) => (
        <g key={item} transform={`translate(248, ${108 + i * 36})`}>
          <circle cx={8} cy={8} r={8} fill="#16a34a" fillOpacity={0.15} />
          <path d="M4 8l3 3 6-7" stroke="#16a34a" strokeWidth={1.5} strokeLinecap="round" />
          <text x={24} y={12} fill="#334155" fontSize={12} fontFamily="system-ui">
            {item}
          </text>
        </g>
      ))}

      <rect x={96} y={268} width={140} height={28} rx={14} fill="#ffedd5" />
      <text x={116} y={286} fill="#9a3412" fontSize={11} fontWeight={600} fontFamily="system-ui">
        Ready to publish
      </text>
    </svg>
  );
}
