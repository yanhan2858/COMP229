/*
 * File name: ServicesPage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { offeredServices } from "../data/portfolioContent";

export default function ServicesPage() {
  return (
    <div className="wrap">
      <h1>Services</h1>
      <p>Work I can take on now, from a web page to a machine that needs to boot.</p>
      <div className="service-grid">
        {offeredServices.map((service) => (
          <article className="card" key={service.title}>
            <img src={service.imagePath} alt={service.imageAlt} />
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
