/*
 * File name: EducationPage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { qualifications } from "../data/portfolioContent";

export default function EducationPage() {
  return (
    <div className="wrap">
      <h1>Education</h1>
      <p>The diploma I am taking, and the other qualifications listed on my resume.</p>
      {qualifications.map((qualification) => (
        <article className="card" key={qualification.title}>
          <h2>{qualification.title}</h2>
          <p>{qualification.detail}</p>
          <p>
            <strong>Where.</strong> {qualification.school}
          </p>
          <p>
            <strong>When.</strong> {qualification.dates}
          </p>
          <p>{qualification.note}</p>
        </article>
      ))}
    </div>
  );
}
