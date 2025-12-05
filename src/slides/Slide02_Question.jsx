import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide02Question() {
  return (
    <Slide id="slide-1" background="bg-gradient-to-br from-slate-950 via-slate-900 to-primary/10">
      <div className="text-center space-y-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-5xl md:text-6xl font-bold text-white leading-tight">
            La inactividad
          </p>
          <p className="text-5xl md:text-6xl font-bold text-white leading-tight">
            te envejece más rápido
          </p>
          <p className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            que el tiempo
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-7xl"
        >
          ⏳
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-4xl md:text-5xl font-light text-slate-300"
        >
          ¿Por qué?
        </motion.p>
      </div>
    </Slide>
  )
}
