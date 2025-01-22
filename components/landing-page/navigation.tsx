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
    title: 'Government Use Case',
    href: '/government-use-case',
    description:
      'Real-time KYC checks and fraud detection for a secure onboarding process.',
  },
  {
    title: 'Media Use Case',
    href: '/media-use-case',
    description: 'Precision deepfake detection for images, audio and video content.',
  },
  {
    title: 'Fianance Use Case',
    href: '/finance-use-case',
    description:
      'Real-time risk assessment and fraud prevention.',
  },
]


export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-10">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white">Solutions</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                      Use AI to detect deepfakes. DeepTrack is model agnostic
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
              <ListItem href="/text-detection" title="Text Detection">
                Identify AI generated content and analyze writing patterns for authenticity.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-black text-white ">Use Cases</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >

                    <div className="mb-2 mt-4 text-lg font-medium">
                      <Image src={'/logos/deeptrack-high-resolution-logo-black-transparent.png'} width={200} height={50} alt="Logo" />
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Use AI to detect deepfakes. DeepTrack is model agnostic
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
        <NavigationMenuItem className="hover:bg-customTeal">
          <Link href="#" legacyBehavior passHref>
            <NavigationMenuLink className="bg-black text-white ">
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:bg-customTeal">
          <Link href="/events" legacyBehavior passHref>
            <NavigationMenuLink className="bg-black text-white ">
              Blog & Events
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}