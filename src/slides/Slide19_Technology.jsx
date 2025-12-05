import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide19Technology() {
  const tools = [
    {
      name: 'WHOOP Age',
      description: 'Calcula tu edad fisiológica y ritmo de envejecimiento',
      features: [
        'Edad fisiológica basada en 6 meses de datos',
        'Pace of Aging: -1x (óptimo) a 3x (acelerado)',
        '9 biomarcadores: sueño, HRV, VO₂max, pasos, masa magra'
      ],
      emoji: '⌚',
      url: 'https://support.whoop.com/s/article/Healthspan-WHOOP-Age-Pace-of-Aging-Guide?language=en_US'
    },
    {
      name: 'Garmin Fitness Age',
      description: 'Estima tu edad física basada en VO₂max',
      features: [
        'Compara tu VO₂max con promedios por edad',
        'Trackea progreso en tiempo real',
        'Integra actividad diaria + frecuencia cardíaca'
      ],
      emoji: '🏃',
      url: 'https://www.garmin.com/en-US/garmin-technology/health-science/fitness-age/'
    },
    {
      name: 'Apple Watch / Samsung',
      description: 'Métricas de salud cardiovascular',
      features: [
        'VO₂max estimado',
        'HRV (variabilidad cardíaca)',
        'Zonas de frecuencia cardíaca',
        'Sueño + actividad diaria'
      ],
      emoji: '📱',
      url: null
    }
  ]

  const keyMetrics = [
    { metric: 'VO₂max', desc: 'Capacidad aeróbica', icon: '🫁' },
    { metric: 'HRV', desc: 'Recuperación y estrés', icon: '💓' },
    { metric: 'Sueño', desc: 'Duración + consistencia', icon: '😴' },
    { metric: 'Actividad', desc: 'Pasos + zonas cardíacas', icon: '🚶' }
  ]

  return (
    <Slide id="slide-19">
      <div className="max-w-6xl w-full space-y-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Cómo la tecnología nos puede acompañar
          </h2>
          <p className="text-xl text-muted-foreground">
            Herramientas para medir tu edad biológica y trackear progreso
          </p>
        </motion.div>

        {/* Tools grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool, i) => {
            const MotionComponent = tool.url ? motion.a : motion.div
            const componentProps = tool.url
              ? {
                  href: tool.url,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className: 'bg-card border-2 border-border rounded-xl p-6 space-y-4 hover:border-primary hover:shadow-lg transition-all cursor-pointer'
                }
              : {
                  className: 'bg-card border-2 border-border rounded-xl p-6 space-y-4'
                }

            return (
              <MotionComponent
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                {...componentProps}
              >
                {/* Header */}
                <div className="space-y-3">
                  <div className="text-5xl">{tool.emoji}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {tool.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-sm">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </MotionComponent>
            )
          })}
        </div>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <p className="text-center text-lg font-semibold text-muted-foreground">
            Métricas clave que trackean:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyMetrics.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="bg-card border border-border rounded-lg p-4 text-center space-y-2"
              >
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <p className="font-bold text-foreground">{item.metric}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-center bg-muted/30 rounded-lg p-4"
        >
          <p className="text-sm text-muted-foreground">
            ⚠️ Estas herramientas son estimaciones útiles para trackear progreso,
            <br />
            no reemplazan evaluaciones médicas profesionales
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
