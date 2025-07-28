'use client';

import posthog from "posthog-js";
import {PostHogProvider as PHProvider} from "posthog-js/react";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Initialize PostHog (following official example pattern)
if (typeof window !== 'undefined') {
    // Force direct PostHog host to avoid reverse proxy issues
    const apiHost =process.env.NEXT_PUBLIC_POSTHOG_HOST
    
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: apiHost,
        person_profiles: 'identified_only',
        capture_pageview: false, // We'll handle this manually
        capture_pageleave: true,
        debug: process.env.NODE_ENV === 'development',
    })
    
    if (process.env.NODE_ENV === 'development') {
        console.log('[PostHog] Initialized with API host:', apiHost)
    }
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    return (
        <PHProvider client={posthog}>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </PHProvider>
    )
}

function PostHogPageView(): null {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        if (pathname) {
            let url = window.origin + pathname
            if (searchParams) {
                url += `?${searchParams.toString()}`
            }
            posthog.capture('$pageview', { 
                $current_url: url,
                $referrer: document.referrer,
            })
        }
    }, [pathname, searchParams])

    return null
}