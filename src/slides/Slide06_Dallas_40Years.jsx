import { motion } from 'framer-motion'
import Slide from '../components/Slide'
import DeclineAccelerationChart from '../components/DeclineAccelerationChart'

export default function Slide06Dallas40Years() {
  return (
    <Slide id="slide-5" background="bg-gradient-to-br from-destructive/5 to-background">
      <div className="max-w-6xl w-full space-y-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-primary font-semibold text-xl">2006</p>
          <h2 className="text-5xl font-bold">40 Años Después</h2>
          <p className="text-2xl text-muted-foreground">(Edad 60)</p>
        </motion.div>

        {/* Acceleration visual - Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h3 className="text-3xl font-bold text-center">
            ACELERACIÓN DEL DECLIVE
          </h3>

          <div className="bg-card border-2 border-border rounded-xl p-8">
            <DeclineAccelerationChart />
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
          className="bg-slate-950 text-white rounded-xl p-2 text-center"
        >
          <p className="text-4xl md:text-5xl font-bold leading-tight">
            40 años de vida
            <span className="block text-primary mt-2">=</span>
            <span className="block mt-2">3 semanas en cama</span>
          </p>
          <p className="text-sm text-slate-300 mt-6 italic">
            (En términos de VO₂max: VO₂ a los 60 = VO₂ post-bed rest a los 20)
          </p>
        </motion.div>
      </div>
    </Slide>
  )
}
