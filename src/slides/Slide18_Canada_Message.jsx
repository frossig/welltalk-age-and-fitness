import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide18CanadaMessage() {
  const examples = [
    { text: 'Escaleras vs. ascensor', emoji: '🚶' },
    { text: 'Estar de pie vs. sentado', emoji: '🧍' },
    { text: 'Caminar al hablar por teléfono', emoji: '📱' },
    { text: 'Pausas activas cada hora', emoji: '⏰' }
  ]

  return (
    <Slide id="slide-17" background="bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <div className="max-w-5xl w-full space-y-6">
        {/* Main equation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl md:text-4xl font-light text-slate-300">
            Entonces:
          </h2>

          <div className="space-y-6">
            <p className="text-4xl md:text-5xl font-bold">
              1 hora ejercicio intenso
            </p>

            <p className="text-4xl md:text-5xl font-bold text-destructive">
            NO COMPENSA
            </p>

            <p className="text-4xl md:text-5xl font-bold">
              23 horas de inactividad
            </p>
          </div>
        </motion.div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-primary/20 border-2 border-primary rounded-xl p-8 text-center"
        >
          <p className="text-3xl md:text-4xl font-bold text-primary">
            El movimiento constante
            <br />
            es <Term termKey="zonas_azules">INSUSTITUIBLE</Term>
          </p>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="space-y-4"
        >
          <p className="text-center text-lg text-slate-400 font-semibold">
            Ejemplos prácticos:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {examples.map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/5 rounded-lg p-4"
              >
                <span className="text-3xl">{example.emoji}</span>
                <span className="text-slate-200">{example.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
