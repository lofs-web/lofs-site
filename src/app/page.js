import Home from "./page.client";

// Force rebuild to pick up client changes
export const dynamic = "force-dynamic";

export default function Page() {
  return <Home />;
}
