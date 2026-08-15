import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/services")({
  head: () => ({
    meta: [
      { title: "Services — Khalid Ahsan" },
      {
        name: "description",
        content: "Product design engineering, design systems and performance rescue engagements.",
      },
      { property: "og:title", content: "Services — Khalid Ahsan" },
      {
        property: "og:description",
        content: "Product design engineering, design systems and performance rescue engagements.",
      },
    ],
  }),
  component: () => null,
});
