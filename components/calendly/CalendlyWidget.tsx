"use client";

import Script from "next/script";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url = "https://calendly.com/drjanduffy/appointment",
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url={url}
        style={{ minWidth, height }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
