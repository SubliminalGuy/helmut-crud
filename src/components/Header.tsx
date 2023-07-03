import { Link, NavLink } from "react-router-dom";
import * as Avatar from "@radix-ui/react-avatar";
import "../avatar-styles.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="brand-name">
        <h1 className="header-logo">Helmut Toolz</h1>
      </Link>
      <div className="tool-links" style={{ display: "flex", gap: 30 }}>
        <NavLink to="/openmedia">
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src="/folder-kanban.png"
              alt="OpenMedia"
            />
            <Avatar.Fallback className="AvatarFallback">OM</Avatar.Fallback>
          </Avatar.Root>
        </NavLink>
        <NavLink to="/audiomix">
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src="/cassette-tape.png"
              alt="Audiomix"
            />
            <Avatar.Fallback className="AvatarFallback">HN</Avatar.Fallback>
          </Avatar.Root>
        </NavLink>
        <NavLink to="/hostname">
          <Avatar.Root className="AvatarRoot">
            <Avatar.Image
              className="AvatarImage"
              src="/server.png"
              alt="Hostnames"
            />
            <Avatar.Fallback className="AvatarFallback">HN</Avatar.Fallback>
          </Avatar.Root>
        </NavLink>
      </div>
    </header>
  );
}
