import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide07Transition() {
  return (
    <Slide id="slide-6" background="bg-gradient-to-br from-slate-900 to-slate-950 text-white">
      <div className="text-center space-y-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-slate-300"
        >
          A medida que envejecemos...
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-5xl md:text-6xl font-bold">
            ¿Qué está pasando
          </p>
          <p className="text-5xl md:text-6xl font-bold text-primary">
            en nuestro cuerpo?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-8xl"
        >
          🤔
        </motion.div>
      </div>
    </Slide>
  )
}
