import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide12ReverseAging() {
  const levels = [
    {
      number: '1️⃣',
      title: 'FUNCIONAL',
      subtitle: 'Recuperar capacidad perdida',
      example: 'Ej: VO₂max vuelve a niveles juveniles (Dallas)',
      color: 'border-blue-500/50 bg-blue-500/5'
    },
    {
      number: '2️⃣',
      title: 'CELULAR',
      subtitle: 'Alargar telómeros',
      example: 'Ej: 9 años menos edad biológica',
      color: 'border-purple-500/50 bg-purple-500/5',
      termKey: 'telomeros'
    },
    {
      number: '3️⃣',
      title: 'MUSCULAR',
      subtitle: 'Revertir sarcopenia',
      example: 'Ej: 28% éxito en estudios',
      color: 'border-green-500/50 bg-green-500/5',
      termKey: 'sarcopenia'
    }
  ]

  return (
    <Slide id="slide-11">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Reverse Aging
          </h2>
          <p className="text-2xl text-primary font-semibold">
            No Es Marketing, Es Ciencia
          </p>
        </motion.div>

        {/* Three levels */}
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((level, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="group"
            >
              <div className={`border-2 rounded-xl p-6 h-full ${level.color} hover:scale-105 transition-transform`}>
                <div className="space-y-4 text-center">
                  <div className="text-5xl mb-3">{level.number}</div>

                  <h3 className="text-2xl font-bold">
                    {level.termKey ? (
                      <Term termKey={level.termKey}>{level.title}</Term>
                    ) : (
                      level.title
                    )}
                  </h3>

                  <p className="text-muted-foreground font-medium">
                    {level.subtitle}
                  </p>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-foreground/80">
                      {level.example}
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
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <p className="text-xl text-muted-foreground italic">
            El ejercicio puede revertir décadas de envejecimiento a nivel funcional y celular
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
