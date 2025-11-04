// Force rebuild for Vercel
export const metadata = {
  title: "LOFS",
  description: "LOFS",
};

export const dynamic = "force-dynamic";

import Home from "./page.client";

export default function Page() {
  return <Home />;
}
