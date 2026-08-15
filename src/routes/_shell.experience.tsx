import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Khalid Ahsan" },
      {
        name: "description",
        content:
          "Roles at Northlight Systems, Fathom Labs and Studio Kern, plus a breakdown of craft.",
      },
      { property: "og:title", content: "Experience — Khalid Ahsan" },
      {
        property: "og:description",
        content:
          "Roles at Northlight Systems, Fathom Labs and Studio Kern, plus a breakdown of craft.",
      },
    ],
  }),
  component: () => null,
});
