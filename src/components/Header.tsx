import * as Avatar from "@radix-ui/react-avatar";
import "../avatar-styles.css";

export default function Header() {
  return (
    <header>
      <h1 className="brand-name">Helmut Toolz</h1>
      <div className="tool-links" style={{ display: "flex", gap: 30 }}>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="/gantt-chart-square.png"
            alt="Pedro Duarte"
          />
          <Avatar.Fallback className="AvatarFallback">OM</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="/list-todo.png"
            alt="Projectlist"
          />
          <Avatar.Fallback className="AvatarFallback">PL</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root className="AvatarRoot">
          <Avatar.Image
            className="AvatarImage"
            src="/server.png"
            alt="Hostnames"
          />
          <Avatar.Fallback className="AvatarFallback">HN</Avatar.Fallback>
        </Avatar.Root>
      </div>
    </header>
  );
}
