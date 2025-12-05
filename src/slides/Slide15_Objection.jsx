import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide15Objection() {
  return (
    <Slide id="slide-14" background="bg-slate-900 text-white">
      <div className="max-w-4xl space-y-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl text-slate-300 italic"
        >
          "Momento.."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-3xl md:text-4xl font-light">
            Entonces puedo entrenar <span className="font-bold text-primary">1 hora</span> al día
          </p>

          <p className="text-3xl md:text-4xl font-light">
            y el resto del día puedo quedarme tirado en el sillon, o sentado en la computadora
          </p>

          <p className="text-4xl md:text-5xl font-bold">
            descansando..
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="text-8xl"
        >
          🤔
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="text-4xl font-bold text-yellow-400"
        >
          ¿Funciona así, ya cumplí?
        </motion.p>
      </div>
    </Slide>
  )
}
