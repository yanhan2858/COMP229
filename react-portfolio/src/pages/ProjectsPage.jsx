/*
 * File name: ProjectsPage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { highlightedProjects } from "../data/portfolioContent";

export default function ProjectsPage() {
  return (
    <div className="wrap">
      <h1>Projects</h1>
      <p>Three pieces I want to keep in front: the blog, the garden story, and a game server.</p>
      {highlightedProjects.map((project) => (
        <article className="card" key={project.title}>
          <img src={project.imagePath} alt={project.imageAlt} />
          <h2>
            {project.href ? (
              <a href={project.href} target="_blank" rel="noopener">
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h2>
          <p>
            <strong>Role.</strong> {project.role}
          </p>
          <p>
            <strong>Outcome.</strong> {project.outcome}
          </p>
        </article>
      ))}
    </div>
  );
}
