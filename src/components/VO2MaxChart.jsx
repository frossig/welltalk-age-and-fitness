import { motion } from 'framer-motion'

export default function VO2MaxChart() {
  const data = [
    { x: 50, y: 40, value: 3.30, label: 'Baseline\n20 años', color: '#6B7280' },
    { x: 250, y: 120, value: 2.41, label: '3 sem cama\n-27%', color: '#EF4444' },
    { x: 450, y: 20, value: 3.89, label: '8 sem training\n+18%', color: '#22C55E' }
  ]

  const maxY = 150
  const minY = 10

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 500 180" className="w-full h-auto">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={i}
              x1="30"
              y1={20 + i * 30}
              x2="480"
              y2={20 + i * 30}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </motion.g>

        <text x="10" y="25" className="text-xs fill-muted-foreground">4.0</text>
        <text x="10" y="55" className="text-xs fill-muted-foreground">3.5</text>
        <text x="10" y="85" className="text-xs fill-muted-foreground">3.0</text>
        <text x="10" y="115" className="text-xs fill-muted-foreground">2.5</text>
        <text x="10" y="145" className="text-xs fill-muted-foreground">2.0</text>

        <motion.path
          d={`M ${data[0].x} ${data[0].y} L ${data[1].x} ${data[1].y} L ${data[2].x} ${data[2].y}`}
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {data.map((point, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.4, duration: 0.4 }}
          >
            <circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill={point.color}
              stroke="white"
              strokeWidth="2"
            />

            <text
              x={point.x}
              y={point.y - 20}
              textAnchor="middle"
              className="text-sm font-bold fill-foreground"
            >
              {point.value}
            </text>

            <text
              x={point.x}
              y={point.y + 30}
              textAnchor="middle"
              className="text-xs fill-muted-foreground"
            >
              {point.label.split('\n').map((line, idx) => (
                <tspan key={idx} x={point.x} dy={idx === 0 ? 0 : 14}>
                  {line}
                </tspan>
              ))}
            </text>
          </motion.g>
        ))}

        <motion.path
          d="M 140 50 L 160 50 L 155 45 M 160 50 L 155 55"
          stroke="#6B7280"
          strokeWidth="2"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        />
        <motion.path
          d="M 340 50 L 360 50 L 355 45 M 360 50 L 355 55"
          stroke="#6B7280"
          strokeWidth="2"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="text-center text-sm text-muted-foreground mt-4"
      >
        VO₂max (L/min) - Dallas Study Timeline
      </motion.div>
    </div>
  )
}
