"use client";

interface CalendlyWidgetProps {
  url?: string;
  minWidth?: string;
  height?: string;
}

export default function CalendlyWidget({
  url = "https://calendly.com/drjanduffy/showing",
  minWidth = "320px",
  height = "700px",
}: CalendlyWidgetProps) {
  // Use dangerouslySetInnerHTML pattern (same as RealScout widgets)
  // Script is loaded once globally in root layout
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<div class="calendly-inline-widget" data-url="${url}" style="min-width:${minWidth};height:${height};width:100%;"></div>`,
      }}
    />
  );
}
