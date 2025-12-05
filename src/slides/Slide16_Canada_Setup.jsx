import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import Term from '../components/Term'

export default function Slide16CanadaSetup() {
  const protocol = [
    { phase: '5 días', description: 'Baseline', color: 'bg-blue-500/20' },
    { phase: '14 días', description: 'Bed rest', color: 'bg-destructive/20' },
    { phase: '7 días', description: 'Recuperación', color: 'bg-green-500/20' }
  ]

  return (
    <Slide id="slide-15">
      <div className="max-w-6xl w-full space-y-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-primary font-semibold text-xl">2023</p>
          <h2 className="text-5xl font-bold">La Pregunta Moderna</h2>
          <p className="text-2xl text-muted-foreground">
            <Term termKey="cais">Canadian Aging and Inactivity Study (CAIS)</Term>
          </p>
        </motion.div>

        {/* Study details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Participants */}
          <div className="bg-card border-2 border-border rounded-xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-center">PARTICIPANTES</h3>
            <div className="space-y-3 text-center">
              <p className="text-4xl font-bold text-primary">23</p>
              <p className="text-muted-foreground">personas (55-65 años)</p>
              <div className="flex justify-center gap-6 pt-2">
                <div>
                  <p className="text-3xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">hombres</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">11</p>
                  <p className="text-sm text-muted-foreground">mujeres</p>
                </div>
              </div>
              <p className="text-sm pt-3 border-t border-border">
                26 días de internación total
              </p>
            </div>
          </div>

          {/* Protocol */}
          <div className="bg-card border-2 border-border rounded-xl p-6 space-y-4">
            <h3 className="text-2xl font-bold text-center">PROTOCOLO</h3>
            <div className="space-y-3">
              {protocol.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className={`p-3 rounded-lg ${item.color}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">{item.phase}</span>
                    <span className="text-sm">{item.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Key difference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-primary/10 border-2 border-primary rounded-xl p-8 space-y-4"
        >
          <h3 className="text-2xl font-bold text-center text-primary">
            UN GRUPO ESPECIAL:
          </h3>
          <div className="text-center space-y-2">
            <p className="text-xl font-semibold">
              60-75 min ejercicio intenso diario
            </p>
            <p className="text-muted-foreground">
              (<Term termKey="hiit">HIIT</Term> + <Term termKey="resistencia">resistencia</Term>, 3 sesiones/día)
            </p>
            <p className="text-sm italic text-muted-foreground pt-3">
              ¿Será suficiente para contrarrestar el reposo?
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
