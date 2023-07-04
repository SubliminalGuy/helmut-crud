import { Link, NavLink } from "react-router-dom";
import * as Avatar from "@radix-ui/react-avatar";
import * as Tooltip from "@radix-ui/react-tooltip";
import "../avatar-styles.css";
import "../tooltip-style.css";

export default function Header() {
  return (
    <header>
      <Link to="/" className="brand-name">
        <h1 className="header-logo">Helmut Toolz</h1>
      </Link>
      <div className="tool-links" style={{ display: "flex", gap: 20 }}>
        <NavLink to="/openmedia">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Avatar.Root className="AvatarRoot">
                  <Avatar.Image
                    className="AvatarImage"
                    src="/folder-kanban.png"
                    alt="OpenMedia"
                  />
                  <Avatar.Fallback className="AvatarFallback">
                    OM
                  </Avatar.Fallback>
                </Avatar.Root>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={5}>
                  Openmedia Projects
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </NavLink>
        <NavLink to="/audiomix">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Avatar.Root className="AvatarRoot">
                  <Avatar.Image
                    className="AvatarImage"
                    src="/cassette-tape.png"
                    alt="Audiomix"
                  />
                  <Avatar.Fallback className="AvatarFallback">
                    HN
                  </Avatar.Fallback>
                </Avatar.Root>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={5}>
                  Protools Audiomix
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </NavLink>
        <NavLink to="/hostname">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Avatar.Root className="AvatarRoot">
                  <Avatar.Image
                    className="AvatarImage"
                    src="/server.png"
                    alt="Hostnames"
                  />
                  <Avatar.Fallback className="AvatarFallback">
                    HN
                  </Avatar.Fallback>
                </Avatar.Root>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={5}>
                  Hostname Tool
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </NavLink>
        <NavLink to="/aicut">
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <Avatar.Root className="AvatarRoot">
                  <Avatar.Image
                    className="AvatarImage"
                    src="/brain-circuit.png"
                    alt="AI Cut"
                  />
                  <Avatar.Fallback className="AvatarFallback">
                    HN
                  </Avatar.Fallback>
                </Avatar.Root>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="TooltipContent" sideOffset={5}>
                  AICut Metadata
                  <Tooltip.Arrow className="TooltipArrow" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </NavLink>
      </div>
    </header>
  );
}
