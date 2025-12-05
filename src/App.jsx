import { useState, useEffect } from 'react'

import Slide01Hero from './slides/Slide01_Hero'
import Slide02Question from './slides/Slide02_Question'
import Slide03DallasSetup from './slides/Slide03_Dallas_Setup'
import Slide04DallasResults from './slides/Slide04_Dallas_Results'
import Slide05Dallas30Years from './slides/Slide05_Dallas_30Years'
import Slide06Dallas40Years from './slides/Slide06_Dallas_40Years'
import Slide07Transition from './slides/Slide07_Transition'
import Slide08ProblemsOverview from './slides/Slide08_Problems_Overview'
import Slide09Sarcopenia from './slides/Slide09_Sarcopenia'
import Slide10OtherChanges from './slides/Slide10_OtherChanges'
import Slide11Hope from './slides/Slide11_Hope'
import Slide12ReverseAging from './slides/Slide12_ReverseAging'
import Slide13Examples from './slides/Slide13_Examples'
import Slide14ExerciseTypes from './slides/Slide14_ExerciseTypes'
import Slide15Objection from './slides/Slide15_Objection'
import Slide16CanadaSetup from './slides/Slide16_Canada_Setup'
import Slide17CanadaResults from './slides/Slide17_Canada_Results'
import Slide18CanadaMessage from './slides/Slide18_Canada_Message'
import Slide19Technology from './slides/Slide19_Technology'
import Slide20Summary from './slides/Slide20_Summary'
import Slide21Closing from './slides/Slide21_Closing'

const slides = [
  Slide01Hero,
  Slide02Question,
  Slide03DallasSetup,
  Slide04DallasResults,
  Slide05Dallas30Years,
  Slide06Dallas40Years,
  Slide07Transition,
  Slide08ProblemsOverview,
  Slide09Sarcopenia,
  Slide10OtherChanges,
  Slide11Hope,
  Slide12ReverseAging,
  Slide13Examples,
  Slide14ExerciseTypes,
  Slide15Objection,
  Slide16CanadaSetup,
  Slide17CanadaResults,
  Slide18CanadaMessage,
  Slide19Technology,
  Slide20Summary,
  Slide21Closing
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSlide(prev => Math.min(prev + 1, totalSlides - 1))
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSlide(prev => Math.max(prev - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [totalSlides])

  useEffect(() => {
    const slideEl = document.getElementById(`slide-${currentSlide}`)
    slideEl?.scrollIntoView({ behavior: 'smooth' })
  }, [currentSlide])

  return (
    <div className="relative">
      <div className="scroll-container">
        {slides.map((SlideComponent, index) => (
          <SlideComponent key={index} />
        ))}
      </div>

      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50 navigation">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="fixed bottom-8 right-8 text-muted-foreground text-sm z-50 navigation">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  )
}

export default App
