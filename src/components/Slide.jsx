import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export default function Slide({
  children,
  className = '',
  animate = true,
  background = 'bg-background',
  id
}) {
  const slideVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const Container = animate ? motion.div : 'div'

  return (
    <div
      id={id}
      className={cn('slide', background, className)}
    >
      <Container
        className="w-full h-full flex items-center justify-center px-6 py-4 overflow-y-auto"
        variants={animate ? slideVariants : undefined}
        initial={animate ? "hidden" : undefined}
        whileInView={animate ? "visible" : undefined}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </Container>
    </div>
  )
}
