import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide20Summary() {
  const keyPoints = [
    {
      emoji: '💥',
      text: '3 semanas en cama > 40 años de vida',
      subtitle: '(Dallas Study, 1966-2006)'
    },
    {
      emoji: '🧬',
      text: 'Alta actividad = 9 años menos edad biológica',
      subtitle: '(Telómeros más largos, Tucker 2017)'
    },
    {
      emoji: '💪',
      text: '28% revirtieron sarcopenia completamente',
      subtitle: '(12 semanas entrenamiento, adultos +60)'
    },
    {
      emoji: '🏋️',
      text: 'Fuerza + Aeróbico + Balance = La Receta',
      subtitle: '(Combinación es clave, no uno solo)'
    },
    {
      emoji: '⚠️',
      text: '1 hora ejercicio no compensa 23 horas de inactividad',
      subtitle: '(Movimiento constante insustituible, CAIS 2023)'
    },
    {
      emoji: '✨',
      text: 'Nunca es tarde para empezar',
      subtitle: '(Beneficios aparecen a cualquier edad)'
    }
  ]

  return (
    <Slide id="slide-20">
      <div className="max-w-7xl w-full space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-5xl md:text-6xl font-bold">Para Llevar a Casa</h2>
          <p className="text-xl text-muted-foreground">
            6 Puntos Clave
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {keyPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border-2 border-border rounded-xl p-4 hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="flex items-start gap-3">
                <span className="text-4xl flex-shrink-0">{point.emoji}</span>
                <div className="flex-1 space-y-1">
                  <p className="text-base md:text-lg font-bold text-foreground">
                    {point.text}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {point.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center pt-2"
        >
          <p className="text-base text-muted-foreground italic">
            Todos estos cambios están respaldados por evidencia científica
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
