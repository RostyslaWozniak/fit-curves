import { TLinks } from "../header";
import { NavLink } from "./nav-link";

type NavigationProps = {
  links: TLinks;
};

export const Navigation = ({ links }: NavigationProps) => {
  return (
    <nav className="hidden pr-5 md:block">
      <ul className="flex gap-3">
        {links.map(({ path, label }) => (
          <li key={path}>
            <NavLink label={label} path={path} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
