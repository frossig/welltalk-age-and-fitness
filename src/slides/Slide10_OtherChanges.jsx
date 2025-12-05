import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide10OtherChanges() {
  const categories = [
    {
      title: 'FLEXIBILIDAD',
      emoji: '🤸',
      items: ['• Rigidez articular', '• Rango de movimiento ↓', '• Dolor crónico ↑'],
      termKey: null
    },
    {
      title: 'BALANCE',
      emoji: '⚖️',
      items: ['• Coordinación ↓', '• Riesgo de caídas ↑', '• Reflejos ↓'],
      termKey: null
    },
    {
      title: 'METABOLISMO',
      emoji: '🔥',
      items: ['• Tasa metabólica ↓', '• Sensibilidad insulina ↓', '• Grasa visceral ↑'],
      termKey: null
    },
    {
      title: 'FUNCIÓN COGNITIVA',
      emoji: '🧠',
      items: ['• Memoria ↓', '• Procesamiento ↓', '• Riesgo demencia ↑'],
      termKey: null
    }
  ]

  return (
    <Slide id="slide-9">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl font-bold">Más Allá del Músculo y el Hueso</h2>
          <p className="text-xl text-muted-foreground">
            Otros sistemas afectados por el envejecimiento
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="bg-card border-2 border-border rounded-xl p-6 h-full hover:border-primary transition-all hover:shadow-lg">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-3 border-b-2 border-border">
                    <span className="text-5xl group-hover:scale-110 transition-transform">
                      {category.emoji}
                    </span>
                    <h3 className="text-2xl font-bold">
                      {category.termKey ? (
                        <Term termKey={category.termKey}>{category.title}</Term>
                      ) : (
                        category.title
                      )}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-2">
                    {category.items.map((item, j) => (
                      <p key={j} className="text-foreground/90">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-destructive/10 border-2 border-destructive rounded-xl p-6 text-center"
        >
          <p className="text-xl font-semibold text-destructive">
            ⚠️ Todos estos sistemas se deterioran más rápido con inactividad física
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
