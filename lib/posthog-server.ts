// Server-side PostHog client (for API routes only)
// This file should only be imported in server-side code (API routes, server components)

import { PostHog } from 'posthog-node'

let posthogClient: PostHog | null = null

export function getServerSidePostHog(): PostHog {
  if (!posthogClient) {
    posthogClient = new PostHog(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
    })
  }
  return posthogClient
}

// Helper function to track server-side events
export function trackServerEvent(
  distinctId: string,
  event: string,
  properties?: Record<string, any>
) {
  const posthog = getServerSidePostHog()
  posthog.capture({
    distinctId,
    event,
    properties,
  })
}

// Helper function to identify users on the server
export function identifyServerUser(
  distinctId: string,
  properties?: Record<string, any>
) {
  const posthog = getServerSidePostHog()
  posthog.identify({
    distinctId,
    properties,
  })
}

// Make sure to call this when your server shuts down
export function shutdownPostHog() {
  if (posthogClient) {
    posthogClient.shutdown()
  }
}
