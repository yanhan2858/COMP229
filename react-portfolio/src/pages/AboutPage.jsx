/*
 * File name: AboutPage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { siteOwner } from "../data/portfolioContent";

export default function AboutPage() {
  return (
    <div className="wrap about">
      <img
        className="portrait"
        src={siteOwner.portraitPath}
        alt={`Portrait of ${siteOwner.englishName}`}
      />
      <div>
        <h1>About Me</h1>
        <p>My name is {siteOwner.englishName}.</p>
        <p>
          I am a Software Engineering Technician student at 苏州百年职业学院. I like small,
          finished things: a page that loads, a server that stays up, and a note I can still read
          later. This site is the place I keep that work.
        </p>
      </div>
    </div>
  );
}
