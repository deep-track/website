import posthog from 'posthog-js'

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST ? process.env.NEXT_PUBLIC_POSTHOG_HOST : '/ingest',
  ui_host: 'https://us.i.posthog.com', // Always use the direct UI host
  person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
  capture_pageview: false, // Disable automatic pageview capture, as we capture manually
  capture_pageleave: true, // Enable pageleave capture
  loaded: (posthog) => {
    if (process.env.NODE_ENV === 'development') {
      posthog.debug() // debug mode in development only
      console.log('[PostHog] Debug Mode: Enabled (Development Only)')
    }
  },
});