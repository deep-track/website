'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import Image from 'next/image'
import { RequestAccessModal } from '@/components/layout/requestAccessModal' // <-- import modal

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = 'ListItem'

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Media Use Case',
    href: '/media-use-case',
    description: 'Precision deepfake detection for images, audio and video content.',
  },
  {
    title: 'Finance Use Case',
    href: '/finance-use-case',
    description: 'Real-time risk assessment and fraud prevention.',
  },
  {
    title: 'Government Use Case',
    href: '/government-use-case',
    description: 'AI-driven solutions for public sector challenges.',
  },
  //added use case for executive identity shielding
  {
    title: 'Executive Identity Shielding',
    href: '/executive-identity-shielding',
    description: 'Securely shield your executive identity.',
  },
  // NEW: Insurance Use Case
  {
    title: 'Insurance Use Case',
    href: '/insurance-use-case',
    description: 'AI-powered fraud detection for automotive claims and deepfake prevention.',
  }
  
]

export function Navigation() {
  const [showPitchDeckModal, setShowPitchDeckModal] = React.useState(false)
  const [showCapTableModal, setShowCapTableModal] = React.useState(false)
  const [showCompetitionAnalysisModal, setshowCompetitionAnalysisModal] = React.useState(false)

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className="space-x-10">
          {/* Solutions menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        <Image src={'/logos/deeptrack-high-resolution-logo-black-transparent.png'} width={200} height={50} alt="Logo" />
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Use AI to detect deepfakes. deeptrack is model agnostic
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/image-authentication" title="Image Authentication">
                  Verify image authenticity and detect manipulations using advanced AI analysis.
                </ListItem>
                <ListItem href="/audio-authentication" title="Audio Authentication">
                  Detect deepfakes and verify audio recordings with voice analysis technology.
                </ListItem>
               
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Use Cases menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Use Cases</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-5"> {/* Changed from row-span-4 to row-span-5 */}
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        <Image src={'/logos/deeptrack-high-resolution-logo-black-transparent.png'} width={200} height={50} alt="Logo" />
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Use AI to detect deepfakes. deeptrack is model agnostic
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Support link */}
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className="bg-black text-white">Support</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Blog link */}
          <NavigationMenuItem>
            <Link href="/events" legacyBehavior passHref>
              <NavigationMenuLink className="bg-black text-white">Blog & Events</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Investor relations */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-black text-white">Investor relations</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        <Image src={'/logos/deeptrack-high-resolution-logo-black-transparent.png'} width={200} height={50} alt="Logo" />
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Use AI to detect deepfakes. deeptrack is model agnostic
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>

                {/* Pitch Deck */}
                <li>
                  <NavigationMenuLink
                    onClick={() => setShowPitchDeckModal(true)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    asChild
                  >
                    <div>
                      <div className="text-sm font-medium leading-none">Pitch deck</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Download pitch deck document
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>

                {/* Cap Table */}
                <li>
                  <NavigationMenuLink
                    onClick={() => setShowCapTableModal(true)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    asChild
                  >
                    <div>
                      <div className="text-sm font-medium leading-none">Cap Table</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Download the Cap Table
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>

                 {/* Cap Table */}
                 <li>
                  <NavigationMenuLink
                    onClick={() => setshowCompetitionAnalysisModal(true)}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer"
                    asChild
                  >
                    <div>
                      <div className="text-sm font-medium leading-none">Competitor Analysis</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Download the Competitor Analysis
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Modals */}
      <RequestAccessModal
        isOpen={showPitchDeckModal}
        onClose={() => setShowPitchDeckModal(false)}
        title="Request Pitch Deck"
      />
      <RequestAccessModal
        isOpen={showCapTableModal}
        onClose={() => setShowCapTableModal(false)}
        title="Request Cap Table"
      />
      <RequestAccessModal
        isOpen={showCompetitionAnalysisModal}
        onClose={() => setshowCompetitionAnalysisModal(false)}
        title="Request Competition Analysis"
      />
    </>
  )
}