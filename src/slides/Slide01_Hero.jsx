import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide01Hero() {
  return (
    <Slide id="slide-0" background="bg-gradient-to-br from-background via-background to-primary/5">
      <div className="text-center space-y-8 max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold text-foreground leading-tight"
        >
          Aging & Fitness:
          <br />
          <span className="text-primary">
            ¿Podemos Hacerle Frente al Tiempo?
          </span>
        </motion.h1>
      </div>
    </Slide>
  )
}
