import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide13Examples() {
  const cases = [
    {
      icon: '📊',
      title: 'VO₂MAX',
      subtitle: 'Hombres 50 años (Dallas)',
      stats: [
        { label: 'Antes', value: '2.90 L/min' },
        { label: '6 meses después', value: '↑14%', highlight: true },
        { label: 'Resultado', value: 'Niveles de sus 20 años' }
      ]
    },
    {
      icon: '🧬',
      title: 'TELÓMEROS',
      subtitle: 'Alta actividad física',
      stats: [
        { label: 'Ventaja biológica', value: '9 años', highlight: true },
        { label: 'Beneficio', value: 'Menos inflamación crónica' },
        {  value: '+' },
        {  value: 'Células más jóvenes' }
      ],
      termKey: 'telomeros'
    },
    {
      icon: '💪',
      title: 'MÚSCULO',
      subtitle: 'Adultos mayores entrenamiento resistencia',
      stats: [
        { label: 'Ganancia masa muscular/mes', value: '1-2%', highlight: true },
        { label: 'Fuerza en pocos meses', value: '+30-40%', highlight: true },
        { label: '✅ Reversible', value: 'a cualquier edad' }
      ],
      termKey: 'sarcopenia'
    }
  ]

  return (
    <Slide id="slide-12">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-bold">Casos Reales de Reversión</h2>
          <p className="text-xl text-muted-foreground">
            Datos de estudios científicos
          </p>
        </motion.div>

        {/* Cases grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="bg-card border-2 border-border rounded-xl p-6 h-full hover:border-primary transition-all hover:shadow-lg">
                <div className="space-y-5">
                  {/* Header */}
                  <div className="text-center space-y-2 pb-4 border-b-2 border-border">
                    <div className="text-5xl mb-2">{caseItem.icon}</div>
                    <h3 className="text-2xl font-bold">
                      {caseItem.termKey ? (
                        <Term termKey={caseItem.termKey}>{caseItem.title}</Term>
                      ) : (
                        caseItem.title
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {caseItem.subtitle}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3">
                    {caseItem.stats.map((stat, j) => (
                      <div key={j} className="text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          {stat.label}
                        </p>
                        {stat.value && (
                          <p className={`font-bold ${
                            stat.highlight
                              ? 'text-2xl text-primary'
                              : 'text-lg text-foreground'
                          }`}>
                            {stat.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-green-500/10 border-2 border-green-500 rounded-xl p-6 text-center"
        >
          <p className="text-xl font-semibold text-green-600 dark:text-green-400">
            ✅ Nunca es tarde para empezar: Los beneficios aparecen a cualquier edad
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
