"use client";
import React from "react";
import * as Sentry from "@sentry/nextjs";

export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    Sentry.captureException(error);
    console.error("React render error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div className="text-red-500">Something went wrong. Please try again.</div>;
    }
    return this.props.children;
  }
}
