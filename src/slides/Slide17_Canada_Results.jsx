import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide17CanadaResults() {
  const results = [
    {
      metric: 'Fitness aeróbico',
      result: 'Grupo ejercicio: mantuvo VO₂max',
      icon: '✅',
      note: '',
      color: 'text-green-500'
    },
    {
      metric: 'Fuerza muscular rodillas',
      result: '↓ en AMBOS grupos',
      icon: '❌',
      note: '(incluso con ejercicio)',
      color: 'text-destructive'
    },
    {
      metric: 'Intolerancia ortostática',
      result: 'Ambos grupos afectados',
      icon: '❌',
      note: '',
      color: 'text-destructive',
      termKey: 'intolerancia_ortostatica'
    },
    {
      metric: 'Inflamación (TNF-α, IL-6)',
      result: '↑ en ambos',
      icon: '⚠️',
      note: 'peor en adultos mayores',
      color: 'text-orange-500',
      termKey: 'inflamacion_cronica'
    },
    {
      metric: 'Biomarcadores neurales',
      result: 'Signos neurodegenerativos',
      icon: '❌',
      note: 'independientes del ejercicio',
      color: 'text-destructive'
    }
  ]

  return (
    <Slide id="slide-16">
      <div className="max-w-6xl w-full space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <h2 className="text-5xl font-bold">Resultados Críticos</h2>
          <p className="text-xl text-muted-foreground">
            El ejercicio intenso NO fue suficiente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-2 border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="text-base font-bold mb-1">
                    {item.termKey ? (
                      <Term termKey={item.termKey}>{item.metric}:</Term>
                    ) : (
                      `${item.metric}:`
                    )}
                  </h3>
                  <p className={`text-base font-semibold ${item.color}`}>
                    {item.result}
                  </p>
                  {item.note && (
                    <p className="text-xs text-muted-foreground mt-1 italic">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-destructive/10 border-2 border-destructive rounded-xl p-4 text-center"
        >
          <p className="text-lg font-semibold text-destructive">
            ⚠️ El reposo prolongado causó daños que el ejercicio intenso no pudo prevenir completamente
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
