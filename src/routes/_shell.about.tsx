import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/about")({
  head: () => ({
    meta: [
      { title: "About — Khalid Ahsan" },
      {
        name: "description",
        content:
          "Nine years of design engineering: editorial roots, product focus, and a bias toward speed.",
      },
      { property: "og:title", content: "About — Khalid Ahsan" },
      {
        property: "og:description",
        content:
          "Nine years of design engineering: editorial roots, product focus, and a bias toward speed.",
      },
    ],
  }),
  component: () => null,
});
