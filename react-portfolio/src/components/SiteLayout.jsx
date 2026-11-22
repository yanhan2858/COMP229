/*
 * File name: SiteLayout.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { NavLink, Outlet } from "react-router-dom";
import { navigationLinks, siteOwner } from "../data/portfolioContent";

export default function SiteLayout() {
  return (
    <>
      <header>
        <nav className="site-nav" aria-label="Main">
          <NavLink className="brand" to="/">
            <img className="logo" src="/images/logo.svg" alt="Jenny Ed logo" />
            <span>{siteOwner.englishName}</span>
          </NavLink>
          <ul>
            {navigationLinks.map((navigationLink) => (
              <li key={navigationLink.pageKey}>
                <NavLink
                  to={navigationLink.path}
                  className={({ isActive }) => (isActive ? "active" : undefined)}
                  end={navigationLink.path === "/"}
                >
                  {navigationLink.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>
          {siteOwner.englishName}
        </p>
      </footer>
    </>
  );
}
