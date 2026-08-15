import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Khalid Ahsan" },
      {
        name: "description",
        content:
          "Selected work: Meridian analytics, Halo Field mobile research app, and the Lattice layout engine.",
      },
      { property: "og:title", content: "Projects — Khalid Ahsan" },
      {
        property: "og:description",
        content:
          "Selected work: Meridian analytics, Halo Field mobile research app, and the Lattice layout engine.",
      },
    ],
  }),
  component: () => null,
});
