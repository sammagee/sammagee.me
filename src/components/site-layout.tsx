import { ViewTransition, type ReactNode } from 'react'

import { CharTrail } from '@/components/char-trail'
import { ThemeSurface } from '@/components/theme-surface'
import { TooltipProvider } from '@/components/tooltip'
import { cn } from '@/lib/utils'

// `fit` keeps a short page within one small viewport on phones: instead of a
// fixed 7.4375rem top and bottom (which pushed the home page past the screen),
// the content is centered in 100svh with a smaller minimum padding.
export function SiteLayout({
  children,
  fit = false,
}: {
  children: ReactNode
  fit?: boolean
}) {
  return (
    <>
      <CharTrail />
      <TooltipProvider>
        <ThemeSurface
          className={cn(
            'min-h-svh min-[440px]:py-24 sm:py-44 md:py-[14.75rem]',
            fit ? 'flex flex-col justify-center py-8' : 'py-[7.4375rem]'
          )}
        >
          <ViewTransition name="site-content">
            <div className="mx-auto w-full max-w-[44.75rem] overflow-x-clip px-8 text-gray-1200 antialiased md:overflow-x-visible md:px-9">
              {children}
            </div>
          </ViewTransition>
        </ThemeSurface>
      </TooltipProvider>
    </>
  )
}
