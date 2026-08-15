import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_shell/")({
  head: () => ({
    meta: [
      { title: "Khalid Ahsan — Product Engineer & Interface Designer" },
      {
        name: "description",
        content:
          "Portfolio of Khalid Ahsan, a product engineer and interface designer in Dhaka building fast, considered software interfaces.",
      },
      { property: "og:title", content: "Khalid Ahsan — Product Engineer & Interface Designer" },
      {
        property: "og:description",
        content: "Design engineering for product teams: interfaces, systems and performance.",
      },
    ],
  }),
  component: () => null,
});
