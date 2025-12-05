import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide11Hope() {
  return (
    <Slide id="slide-10" background="bg-gradient-to-br from-green-950/20 via-background to-primary/10">
      <div className="text-center space-y-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-muted-foreground"
        >
          Suena terrible, ¿no?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-8xl"
        >
          😰
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-3xl font-light">
            Pero hay
          </p>
          <p className="text-6xl md:text-7xl font-bold text-green-500">
            BUENAS NOTICIAS
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="text-8xl"
        >
          ✨
        </motion.div>
      </div>
    </Slide>
  )
}
