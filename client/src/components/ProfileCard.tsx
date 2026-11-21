import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export type Membership = "member" | "non-member" | "committee";

type ProfileCardProps = {
  username: string;
  name: string;
  avatarUrl?: string;
  membership: Membership;
};

const membershipLabel: Record<Membership, string> = {
  member: "Member",
  "non-member": "Non-member",
  committee: "Committee",
};

export default function ProfileCard({
  username,
  name,
  avatarUrl,
  membership,
}: ProfileCardProps) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <Avatar className="h-16 w-16">
          <AvatarImage src={avatarUrl} alt={`${username}'s profile picture`} />
          <AvatarFallback>{name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Hello, {name}!</h2>
          <p className="text-sm text-muted-foreground">@{username}</p>
          <Badge variant={membership === "non-member" ? "outline" : "default"}>
            {membershipLabel[membership]}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
