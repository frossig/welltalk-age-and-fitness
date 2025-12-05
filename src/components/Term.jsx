import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card'
import { ExternalLink } from 'lucide-react'
import termsData from '../data/terms.json'

export default function Term({ children, termKey }) {
  const [open, setOpen] = useState(false)
  const term = termsData.terms[termKey]

  if (!term) {
    console.warn(`Term "${termKey}" not found in database`)
    return <span>{children}</span>
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className="text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80 transition-colors cursor-pointer font-medium"
          >
            {children}
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" side="top">
          <div className="space-y-2">
            <h4 className="font-semibold">{term.name}</h4>
            <p className="text-sm text-muted-foreground">{term.definition}</p>
            <p className="text-xs text-muted-foreground italic">Click para más info</p>
          </div>
        </HoverCardContent>
      </HoverCard>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-3">
            {term.emoji && <span className="text-4xl">{term.emoji}</span>}
            {term.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 pt-4">
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">{term.definition}</p>
            {term.detail && (
              <p className="text-muted-foreground leading-relaxed">{term.detail}</p>
            )}
          </div>

          {term.emoji && (
            <div className="text-center py-6">
              <span className="text-8xl">{term.emoji}</span>
            </div>
          )}

          {term.stats && term.stats.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">Datos Clave</h3>
              <ul className="space-y-2">
                {term.stats.map((stat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span className="flex-1">{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {term.sources && term.sources.length > 0 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-lg border-b pb-2">Fuentes</h3>
              <div className="space-y-2">
                {term.sources.map((source, i) => (
                  <a
                    key={i}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:underline group"
                  >
                    <ExternalLink className="h-4 w-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    <span>{source.text}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
