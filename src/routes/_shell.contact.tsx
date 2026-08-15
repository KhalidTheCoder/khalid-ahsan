import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Khalid Ahsan" },
      {
        name: "description",
        content: "Start a project with Khalid Ahsan — replies within 24 hours on weekdays.",
      },
      { property: "og:title", content: "Contact — Khalid Ahsan" },
      {
        property: "og:description",
        content: "Start a project with Khalid Ahsan — replies within 24 hours on weekdays.",
      },
    ],
  }),
  component: () => null,
});
