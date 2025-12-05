import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'
import VO2MaxChart from '../components/VO2MaxChart'

export default function Slide04DallasResults() {
  const results = [
    {
      label: 'BASELINE (20 años)',
      value: '3.30 L/min',
      change: null,
      color: 'text-muted-foreground'
    },
    {
      label: 'DESPUÉS DE 3 SEMANAS EN CAMA',
      value: '2.41 L/min',
      change: '-27%',
      color: 'text-destructive',
      icon: '⚠️'
    },
    {
      label: 'DESPUÉS DE 8 SEMANAS ENTRENAMIENTO',
      value: '3.89 L/min',
      change: '+18%',
      color: 'text-green-500',
      icon: '✅'
    }
  ]

  return (
    <Slide id="slide-3">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-bold">
            Resultados: El Impacto del Reposo
          </h2>
          <p className="text-xl text-muted-foreground">
            Cambios en <Term termKey="vo2max">VO₂max</Term>
          </p>
        </motion.div>

        {/* Visual chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="bg-card border-2 border-border rounded-xl p-8"
        >
          <VO2MaxChart />
        </motion.div>

        {/* Results summary */}
        <div className="grid md:grid-cols-3 gap-4">
          {results.map((result, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
              className="bg-card border-2 border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
            >
              <p className="text-xs font-semibold text-muted-foreground mb-2">
                {result.label}
              </p>
              <div className="flex items-center justify-center gap-2">
                <p className="text-2xl font-bold">
                  {result.value}
                </p>
                {result.change && (
                  <span className={`text-xl font-bold ${result.color}`}>
                    {result.change}
                  </span>
                )}
                {result.icon && (
                  <span className="text-2xl">{result.icon}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center pt-8"
        >
          <p className="text-lg text-muted-foreground italic">
            3 semanas en cama causaron una caída del 27% en capacidad aeróbica
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
