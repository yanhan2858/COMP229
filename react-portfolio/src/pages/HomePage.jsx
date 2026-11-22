/*
 * File name: HomePage.jsx
 * Student Name: Jenny Ed
 * StudentID: 2024110651
 * Date: 2026-11-22
 */

import { useSearchParams, Link } from "react-router-dom";
import { siteOwner } from "../data/portfolioContent";

function readSenderName() {
  const savedSubmission = sessionStorage.getItem("contactSubmission");

  if (!savedSubmission) {
    return "";
  }

  try {
    const contactSubmission = JSON.parse(savedSubmission);
    return contactSubmission.firstName || "";
  } catch {
    return "";
  }
}

export default function HomePage() {
  const [searchParams] = useSearchParams();
  const messageWasKept = searchParams.get("sent") === "1";
  const senderName = messageWasKept ? readSenderName() : "";

  return (
    <div className="wrap">
      <h1>Welcome</h1>
      {messageWasKept ? (
        <p className="notice" role="status">
          {senderName
            ? `Thanks, ${senderName}. Your message was kept, and you are back on the home page.`
            : "Thanks. Your message was kept, and you are back on the home page."}
        </p>
      ) : null}
      <p>Hello. I am {siteOwner.englishName}.</p>
      <p>
        <strong>Mission.</strong> I keep a small place for the work I actually make: the garden at
        liyigarden, the story of Lii, and a way to reach me. I also build small websites and look
        after Windows and Linux machines.
      </p>
      <p className="actions">
        <Link className="button" to="/about">
          About me
        </Link>
        <Link className="button button-plain" to="/projects">
          Projects
        </Link>
      </p>
    </div>
  );
}
