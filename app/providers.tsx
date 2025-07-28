'use client';

import posthog from "posthog-js";
import {PostHogProvider as PHProvider} from "posthog-js/react";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ? process.env.NEXT_PUBLIC_POSTHOG_HOST : '/ingest',
            ui_host: 'https://us.i.posthog.com', // Always use the direct UI host
            person_profiles: 'identified_only',
            capture_pageview: false,
            capture_pageleave: true,
            loaded: (posthog) => {
                if (process.env.NODE_ENV === 'development') {
                    posthog.debug()
                    console.log('🔍 PostHog Debug Mode: Enabled (Development Only)')
                }
            },
        })
    }, [])

    return (
        <PHProvider client={posthog}>
            <PostHogPageView />
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
                $referrer: document.referrer, //optional
            })
        }
    }, [pathname, searchParams])

    return null
}