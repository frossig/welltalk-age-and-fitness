import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide03DallasSetup() {
  const stats = [
    { icon: '👥', text: '5 hombres de 20 años' },
    { icon: '🛏️', text: '3 semanas de reposo absoluto' },
    { icon: '🏃', text: '8 semanas de entrenamiento después' }
  ]

  return (
    <Slide id="slide-2">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Title and context */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <p className="text-primary font-semibold text-lg">1966</p>
            <h2 className="text-5xl font-bold text-foreground">
              El Experimento que Cambió Todo
            </h2>
            <p className="text-xl text-muted-foreground">
              Dallas Bed Rest and Training Study
            </p>
          </div>

          <div className="w-20 h-1 bg-primary rounded"></div>

          {/* Stats */}
          <div className="space-y-4 pt-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-4 text-lg"
              >
                <span className="text-4xl">{stat.icon}</span>
                <span className="text-foreground font-medium">{stat.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Visual representation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <div className="text-9xl opacity-50">
            🛏️
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
