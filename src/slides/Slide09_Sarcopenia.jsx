import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide09Sarcopenia() {
  const timeline = [
    { age: '30 años', event: 'Comienza', severity: 'text-muted-foreground' },
    { age: '40-50', event: '3-8% por década', severity: 'text-yellow-500' },
    { age: '50-60', event: 'Acelera', severity: 'text-orange-500' },
    { age: '60+', event: '15% por década', severity: 'text-destructive' },
    { age: '80 años', event: 'Hasta 30% menos músculo total', severity: 'text-destructive font-bold' }
  ]

  return (
    <Slide id="slide-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
        {/* Left: Title and visual */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">
              <Term termKey="sarcopenia">Sarcopenia</Term>
            </h2>
            <p className="text-2xl text-muted-foreground">
              La Pérdida Silenciosa
            </p>
          </div>

          {/* Visual comparison */}
          <div className="bg-card border-2 border-border rounded-xl p-8 text-center space-y-6">
            <div className="flex justify-around items-center">
              <div className="text-center space-y-2">
                <div className="text-6xl">💪</div>
                <p className="text-sm font-semibold">Joven</p>
                <p className="text-xs text-muted-foreground">Masa muscular completa</p>
              </div>
              <div className="text-4xl text-muted-foreground">→</div>
              <div className="text-center space-y-2">
                <div className="text-6xl opacity-50">💪</div>
                <p className="text-sm font-semibold">Mayor</p>
                <p className="text-xs text-muted-foreground">-30% músculo</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            LÍNEA DE TIEMPO
          </h3>

          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="min-w-[100px] text-right">
                  <span className="font-bold text-lg">{item.age}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary"></div>
                <div className="flex-1 bg-card border border-border rounded-lg p-3">
                  <p className={item.severity}>{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-primary/10 border-2 border-primary rounded-lg p-4 mt-8"
          >
            <p className="text-center font-semibold text-primary">
              ⚠️ Reemplazado por grasa en proporción similar
            </p>
          </motion.div>
        </motion.div>
      </div>
    </Slide>
  )
}
