import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Khalid Ahsan" },
      {
        name: "description",
        content:
          "Selected client work: Cresify, Bright Horizons, and Facep across marketplace, family technology, and e-commerce.",
      },
      { property: "og:title", content: "Projects — Khalid Ahsan" },
      {
        property: "og:description",
        content:
          "Selected client work: Cresify, Bright Horizons, and Facep across marketplace, family technology, and e-commerce.",
      },
    ],
  }),
  component: () => null,
});
