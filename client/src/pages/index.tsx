import { Inter as FontSans } from "next/font/google";
import { useState } from "react";

import NotificationPanel from "@/components/NotificationPanel";
import ProfileCard from "@/components/ProfileCard";
import { usePings } from "@/hooks/pings";
import { cn } from "@/lib/utils";

import { Button } from "../components/ui/button";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mockNotifications = [
  {
    id: "1",
    title: "Application progress",
    message: "Your membership application is under review.",
  },
  {
    id: "2",
    title: "Voting progress",
    message: "Voting is open until Friday.",
  },
  {
    id: "3",
    title: "Results released",
    message: "The election results are now available.",
  },
];

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const { data, isLoading } = usePings({
    enabled: clicked,
  });

  return (
    <main
      className={cn(
        "flex min-h-screen flex-col items-center gap-4 p-24 font-sans",
        fontSans.variable,
      )}
    >
      <h1 className="text-3xl text-primary">Test title</h1>
      <Button onClick={() => setClicked(true)}>
        {isLoading ? "Loading" : "Ping"}
      </Button>
      <p>
        Response from server: <span>{data as string}</span>
      </p>
      <div className="w-full max-w-md space-y-6">
        <ProfileCard username="karan2908ks" name="Karan" membership="member" />
        <NotificationPanel notifications={mockNotifications} />
      </div>
    </main>
  );
}
