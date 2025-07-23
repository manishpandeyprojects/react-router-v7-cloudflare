import { useLoaderData } from "react-router";
import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export async function loader(): Route.Loader {
  return {
    message: "Hello from the Cloudflare edge!",
    time: new Date().toISOString(),
  };
}

export function meta(): Route.Meta {
  return [
    { title: "React Router SSR on Workers" },
    {
      name: "description",
      content: "Testing server-side rendering on Cloudflare.",
    },
  ];
}

export default function Home() {
  const data = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Server-side Rendered Home</h1>
      <p>
        <strong>Message:</strong> {data.message}
      </p>
      <p>
        <strong>Server Time:</strong> {data.time}
      </p>
      <div style={{ marginTop: "2rem" }}>
        <Welcome />
      </div>
    </div>
  );
}
