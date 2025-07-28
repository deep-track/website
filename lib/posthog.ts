import { usePostHog } from 'posthog-js/react'
import { useCallback } from 'react'

// Custom hook for PostHog analytics
export function useAnalytics() {
  const posthog = usePostHog()

  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    posthog?.capture(eventName, properties)
  }, [posthog])

  const identifyUser = useCallback((userId: string, properties?: Record<string, any>) => {
    posthog?.identify(userId, properties)
  }, [posthog])

  const setUserProperties = useCallback((properties: Record<string, any>) => {
    posthog?.setPersonProperties(properties)
  }, [posthog])

  const resetUser = useCallback(() => {
    posthog?.reset()
  }, [posthog])

  const trackPageView = useCallback((url?: string) => {
    posthog?.capture('$pageview', {
      $current_url: url || window.location.href,
    })
  }, [posthog])

  // Common tracking functions for your app
  const trackButtonClick = useCallback((buttonName: string, location?: string) => {
    trackEvent('button_clicked', {
      button_name: buttonName,
      location: location || 'unknown',
    })
  }, [trackEvent])

  const trackFormSubmit = useCallback((formName: string, success: boolean = true) => {
    trackEvent('form_submitted', {
      form_name: formName,
      success,
    })
  }, [trackEvent])

  const trackFileDownload = useCallback((fileName: string, fileType?: string) => {
    trackEvent('file_downloaded', {
      file_name: fileName,
      file_type: fileType,
    })
  }, [trackEvent])

  const trackVideoPlay = useCallback((videoName: string, duration?: number) => {
    trackEvent('video_played', {
      video_name: videoName,
      duration,
    })
  }, [trackEvent])

  const trackFeatureUsage = useCallback((featureName: string, context?: Record<string, any>) => {
    trackEvent('feature_used', {
      feature_name: featureName,
      ...context,
    })
  }, [trackEvent])

  return {
    trackEvent,
    identifyUser,
    setUserProperties,
    resetUser,
    trackPageView,
    trackButtonClick,
    trackFormSubmit,
    trackFileDownload,
    trackVideoPlay,
    trackFeatureUsage,
  }
}

// Common event types for type safety
export type AnalyticsEvent = 
  | 'button_clicked'
  | 'form_submitted'
  | 'file_downloaded'
  | 'video_played'
  | 'feature_used'
  | 'page_viewed'
  | 'user_signed_up'
  | 'user_logged_in'
  | 'user_logged_out'
  | 'error_occurred'
