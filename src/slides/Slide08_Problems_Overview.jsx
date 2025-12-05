import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide08ProblemsOverview() {
  const problems = [
    { emoji: '💪', label: 'Músculos', term: 'sarcopenia', termKey: 'sarcopenia' },
    { emoji: '🦴', label: 'Huesos', term: 'osteoporosis', termKey: 'osteoporosis' },
    { emoji: '❤️', label: 'Corazón', term: '↓ VO₂max', termKey: 'vo2max' },
    { emoji: '🧠', label: 'Cerebro', term: '↓ Función cognitiva', termKey: null },
    { emoji: '🧬', label: 'Células', term: 'Acortamiento de telómeros', termKey: 'telomeros' }
  ]

  return (
    <Slide id="slide-7">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-bold">Los Cambios Inevitables</h2>
          <p className="text-xl text-muted-foreground">
            (O... ¿tal vez no tan inevitables?)
          </p>
        </motion.div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-card border-2 border-border rounded-xl p-6 text-center space-y-4 h-full hover:border-primary transition-all hover:shadow-lg hover:scale-105">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform">
                  {problem.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {problem.label}
                </h3>
                <div className="text-muted-foreground">
                  {problem.termKey ? (
                    <Term termKey={problem.termKey}>{problem.term}</Term>
                  ) : (
                    <span>{problem.term}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-muted-foreground italic"
        >
          Click en los términos para conocer más detalles
        </motion.p>
      </div>
    </Slide>
  )
}
