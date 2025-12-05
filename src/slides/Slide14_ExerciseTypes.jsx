import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide14ExerciseTypes() {
  const pillars = [
    {
      emoji: '🏋️',
      title: 'FUERZA',
      solves: ['Sarcopenia', 'Osteoporosis', 'Metabolismo'],
      solvesKeys: ['sarcopenia', 'osteoporosis', null],
      examples: ['Sentadillas', 'Pesas light', 'Bandas elásticas'],
      frequency: '2-3×/semana',
      color: 'border-red-500/50 bg-red-500/5'
    },
    {
      emoji: '🏃',
      title: 'AERÓBICO',
      solves: ['VO₂max ↓', 'Corazón', 'Cerebro'],
      solvesKeys: ['vo2max', null, null],
      examples: ['Caminar', 'HIIT', 'Natación'],
      examplesKeys: [null, 'hiit', null],
      frequency: '150min/semana',
      color: 'border-blue-500/50 bg-blue-500/5'
    },
    {
      emoji: '🧘',
      title: 'BALANCE',
      solves: ['Caídas', 'Rigidez', 'Coordinación'],
      solvesKeys: [null, null, null],
      examples: ['Yoga', 'Tai Chi', 'Pilates'],
      frequency: '2-3×/semana',
      color: 'border-purple-500/50 bg-purple-500/5'
    }
  ]

  return (
    <Slide id="slide-13">
      <div className="max-w-7xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-bold">La Receta</h2>
          <p className="text-2xl text-primary font-semibold">
            3 Pilares Esenciales
          </p>
        </motion.div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className={`border-2 rounded-xl p-6 h-full ${pillar.color}`}>
                <div className="space-y-5">
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <div className="text-6xl mb-2">{pillar.emoji}</div>
                    <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  </div>

                  {/* Solves */}
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground uppercase">
                      Soluciona:
                    </p>
                    <ul className="space-y-1">
                      {pillar.solves.map((item, j) => (
                        <li key={j} className="text-sm flex items-start gap-2">
                          <span className="text-primary mt-0.5">•</span>
                          {pillar.solvesKeys && pillar.solvesKeys[j] ? (
                            <Term termKey={pillar.solvesKeys[j]}>{item}</Term>
                          ) : (
                            <span>{item}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2">
                    <p className="font-semibold text-sm text-muted-foreground uppercase">
                      Ejemplos:
                    </p>
                    <ul className="space-y-1">
                      {pillar.examples.map((item, j) => (
                        <li key={j} className="text-sm">
                          {pillar.examplesKeys && pillar.examplesKeys[j] ? (
                            <Term termKey={pillar.examplesKeys[j]}>{item}</Term>
                          ) : (
                            item
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Frequency */}
                  <div className="pt-3 border-t border-border">
                    <p className="text-center font-bold text-primary">
                      {pillar.frequency}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-primary/10 border-2 border-primary rounded-xl p-6 text-center"
        >
          <p className="text-xl font-semibold">
            ⚠️ La combinación es clave: Los tres pilares son necesarios para resultados óptimos
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
