import { Link } from "@remix-run/react";
import { Input } from "./ui/input";

export function Menu() {
  return (
    <nav className="flex gap-3 pt-5 items-center justify-between">
      <div className="flex gap-3 items-center justify-between">
        <Link to="/">
          <div className="w-10 h-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 282.36 282.37"
            >
              <defs>
                <style>
                  {`

      .cls-2 {
        fill: #f6921e;
      }

      .cls-3 {
        fill: #c66b10;
      }`}
                </style>
              </defs>
              <polygon
                fill="currentColor"
                points="282.36 0 93.23 0 187.8 94.57 282.36 0"
              />
              <path
                className="cls-3"
                d="m187.8,94.57l-93.23,93.23,94.57,94.57c1.43,0,2.85-.03,4.27-.1,66.63-3,96.84-85.25,49.68-132.41l-55.29-55.29h0Z"
              />
              <path
                className="cls-2"
                d="m93.23,0h0c-1.43,0-2.85.03-4.27.1C22.33,3.1-7.88,85.34,39.28,132.5l55.29,55.29,93.23-93.23L93.23,0Z"
              />
              <polygon
                fill="currentColor"
                points="94.57 187.8 0 282.37 189.14 282.37 94.57 187.8"
              />
            </svg>
          </div>
        </Link>
        <Link to="/blog">Blog</Link>
        <Link to="/resume">Resume</Link>
      </div>
      <Input className="w-70" placeholder="Search" />
    </nav>
  );
}
