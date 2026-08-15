import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PortfolioShell } from "@/components/portfolio/PortfolioShell";

export const Route = createFileRoute("/_shell")({
  component: ShellLayout,
});

function ShellLayout() {
  return (
    <>
      <PortfolioShell />
      {/* Child routes carry metadata only; the shell owns the visual experience. */}
      <Outlet />
    </>
  );
}
