import { motion } from 'framer-motion'

export default function DeclineAccelerationChart() {
  const points = [
    { age: 20, vo2: 3.30, x: 50, y: 30 },
    { age: 50, vo2: 2.90, x: 250, y: 60 },
    { age: 60, vo2: 2.41, x: 450, y: 140 }
  ]

  const createCurvePath = () => {
    return `M ${points[0].x} ${points[0].y}
            Q ${points[1].x - 50} ${points[1].y - 10} ${points[1].x} ${points[1].y}
            Q ${points[2].x - 80} ${points[2].y - 30} ${points[2].x} ${points[2].y}`
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 500 200" className="w-full h-auto">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <line
              key={i}
              x1="40"
              y1={20 + i * 30}
              x2="470"
              y2={20 + i * 30}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </motion.g>

        <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" strokeWidth="2" />
        <line x1="40" y1="170" x2="470" y2="170" stroke="currentColor" strokeWidth="2" />

        <text x="10" y="100" className="text-xs fill-muted-foreground" transform="rotate(-90, 10, 100)">
          VO₂max (L/min)
        </text>

        <text x={points[0].x} y="190" textAnchor="middle" className="text-sm font-semibold fill-foreground">
          20
        </text>
        <text x={points[1].x} y="190" textAnchor="middle" className="text-sm font-semibold fill-foreground">
          50
        </text>
        <text x={points[2].x} y="190" textAnchor="middle" className="text-sm font-semibold fill-foreground">
          60
        </text>
        <text x="260" y="200" textAnchor="middle" className="text-xs fill-muted-foreground">
          Edad (años)
        </text>

        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--destructive))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--destructive))" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <motion.path
          d={`${createCurvePath()} L ${points[2].x} 170 L ${points[0].x} 170 Z`}
          fill="url(#curveGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        />

        <motion.path
          d={createCurvePath()}
          stroke="hsl(var(--destructive))"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
        />

        {points.map((point, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.5, duration: 0.4 }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r="7"
              fill="hsl(var(--destructive))"
              stroke="white"
              strokeWidth="2"
            />
            <text
              x={point.x}
              y={point.y - 15}
              textAnchor="middle"
              className="text-xs font-bold fill-foreground"
            >
              {point.vo2}
            </text>
          </motion.g>
        ))}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          <line
            x1={150}
            y1={45}
            x2={150}
            y2={60}
            stroke="#22C55E"
            strokeWidth="2"
            strokeDasharray="4,2"
          />
          <text
            x={150}
            y={40}
            textAnchor="middle"
            className="text-xs font-semibold fill-green-600 dark:fill-green-400"
          >
            -13 ml/min/año
          </text>

          <line
            x1={350}
            y1={95}
            x2={350}
            y2={140}
            stroke="hsl(var(--destructive))"
            strokeWidth="3"
            strokeDasharray="4,2"
          />
          <text
            x={350}
            y={90}
            textAnchor="middle"
            className="text-xs font-bold fill-destructive"
          >
            -50 ml/min/año
          </text>

          <text
            x={350}
            y={155}
            textAnchor="middle"
            className="text-sm font-bold fill-destructive"
          >
            ×4 más rápido
          </text>
        </motion.g>
      </svg>
    </div>
  )
}
