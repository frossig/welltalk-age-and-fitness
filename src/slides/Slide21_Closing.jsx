import { motion } from 'framer-motion'
import Slide from '../components/Slide'

export default function Slide21Closing() {
  return (
    <Slide id="slide-21" background="bg-gradient-to-br from-slate-950 via-slate-900 to-primary/10">
      <div className="max-w-5xl w-full space-y-6">
        {/* Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Main visual */}
          <div className="flex justify-center items-center gap-8">
            <div className="text-center space-y-3">
              <div className="text-8xl">💪</div>
              <p className="text-sm text-slate-400">Hoy</p>
            </div>
            <div className="text-5xl text-slate-500">→</div>
            <div className="text-center space-y-3">
              <div className="text-8xl grayscale opacity-60">👴</div>
              <p className="text-sm text-slate-400">+40 años</p>
            </div>
          </div>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <div className="space-y-6">
            <p className="text-3xl md:text-4xl font-light text-white">
              El envejecimiento es inevitable.
            </p>

            <p className="text-4xl md:text-5xl font-bold text-primary">
              El deterioro NO.
            </p>

            <p className="text-3xl md:text-4xl font-light text-white italic">
             "Resting is Rusting"
            </p>
          </div>
        </motion.div>
      </div>
    </Slide>
  )
}
