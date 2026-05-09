"use client";

import dynamic from "next/dynamic";

const Studio = dynamic(() => import("./studio").then((mod) => mod.Studio), {
  ssr: false,
});

export function StudioLoader() {
  return <Studio />;
}
