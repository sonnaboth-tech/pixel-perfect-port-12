import { createFileRoute } from "@tanstack/react-router";
import { originalPageMarkup } from "../original-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Whenevr - Design Subscription Website Template for Framer" },
      { name: "description", content: "Whenevr is a free Framer template for design subscription services that want to look established, explain the offer clearly and turn interest into booked calls." },
      { property: "og:title", content: "Whenevr - Design Subscription Website Template for Framer" },
      { property: "og:description", content: "Whenevr is a free Framer template for design subscription services that want to look established, explain the offer clearly and turn interest into booked calls." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://framerusercontent.com/images/rx3gn5HsaoHahNCzHTXcBDAHZI.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://framerusercontent.com/images/rx3gn5HsaoHahNCzHTXcBDAHZI.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  return <div dangerouslySetInnerHTML={{ __html: originalPageMarkup }} />;
}
