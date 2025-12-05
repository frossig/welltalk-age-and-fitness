import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide05Dallas30Years() {
  const changes = [
    { metric: 'VO₂max', change: '-12%', detail: '3.30 → 2.90 L/min' },
    { metric: 'Peso corporal', change: '+25%', detail: '77 → 100 kg' },
    { metric: 'Grasa corporal', change: '+100%', detail: '14% → 28%' },
    { metric: 'Masa libre grasa', change: '+9%', detail: '66 → 72 kg' }
  ]

  return (
    <Slide id="slide-4">
      <div className="max-w-5xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="space-y-2">
            <p className="text-primary font-semibold text-xl">1996</p>
            <h2 className="text-5xl font-bold">30 Años Después</h2>
            <p className="text-2xl text-muted-foreground">(Edad 50)</p>
          </div>
        </motion.div>

        {/* Changes table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center border-b-2 border-primary pb-4">
            CAMBIOS EN 30 AÑOS
          </h3>

          <div className="grid gap-4">
            {changes.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex items-center justify-between p-5 bg-card border border-border rounded-lg"
              >
                <span className="text-lg font-semibold">{item.metric}:</span>
                <div className="text-right">
                  <span className={`text-2xl font-bold mr-4 ${
                    item.change.startsWith('+') ? 'text-destructive' : 'text-green-500'
                  }`}>
                    {item.change}
                  </span>
                  <span className="text-muted-foreground">
                    ({item.detail})
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-primary/10 border-2 border-primary rounded-xl p-4 space-y-4"
        >
          <p className="text-2xl font-bold text-primary text-center">
            🎯 PERO... 6 meses de entrenamiento:
          </p>
          <p className="text-3xl font-bold text-center">
            ✅ <Term termKey="vo2max">VO₂max</Term>: +14%
          </p>
          <p className="text-lg text-center text-muted-foreground italic">
            (Recuperación casi completa a niveles juveniles)
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
