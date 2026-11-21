import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type Notification = { id: string; title: string; message: string };

export default function NotificationPanel({
  notifications,
}: {
  notifications: Notification[];
}) {
  return (
    <section className="space-y-3">
      <h3 className="text-lg font-semibold">Notifications</h3>
      {notifications.map((n) => (
        <Card key={n.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">{n.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{n.message}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
