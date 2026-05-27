"use client"

import dynamic from "next/dynamic"

export const ComponentExampleDynamic = dynamic(
  () =>
    import("@/components/component-example").then((m) => m.ComponentExample),
  { ssr: false }
)
