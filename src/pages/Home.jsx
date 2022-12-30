import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated, config } from "react-spring";

// CSS Imports
import "../styles/Pages.css";

// React Router
import { useNavigate } from "react-router-dom";

// My Imports
import LinkedinBtn from "../components/LinkedinBtn";
import GithubBtn from "../components/GithubBtn";
import EmailBtn from "../components/EmailBtn";
import ResumeBtn from "../components/ResumeBtn";
import LinkBtn from "../components/LinkBtn";

// Photos
// By using import, we ensure that the webpack will bundle the image in the build folder
import headshot_utah from "../assets/headshot_utah.jpg";
import scuba from "../assets/scuba.png";

export default function Home() {
  const navigate = useNavigate();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const title = useSpring({
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(30px)" },
    opacity: mount ? 1 : 0,
    transform: mount ? "translateY(0)" : "translateY(30px)",
    delay: 300,
  });

  const delay400 = useSpring({
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(30px)" },
    opacity: mount ? 1 : 0,
    transform: mount ? "translateY(0)" : "translateY(30px)",
    delay: 400,
  });

  const delay500 = useSpring({
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(30px)" },
    opacity: mount ? 1 : 0,
    transform: mount ? "translateY(0)" : "translateY(30px)",
    delay: 500,
  });

  const delay600 = useSpring({
    config: config.gentle,
    from: { opacity: 0, transform: "translateY(30px)" },
    opacity: mount ? 1 : 0,
    transform: mount ? "translateY(0)" : "translateY(30px)",
    delay: 600,
  });

  const navigateTo = (value) => {
    // 👇️ navigate to /contacts
    console.log(value);
    navigate("/" + value);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="d-flex justify-content-start align-items-start" md={6}>
          <div>
            <animated.div style={title}>
              <img
                src={headshot_utah}
                onMouseEnter={(e) => (e.target.src = scuba)}
                onMouseLeave={(e) => (e.target.src = headshot_utah)}
                alt="headshot of hunter goff"
                className="headshot"
                style={title}
              />
            </animated.div>
            <animated.p className="intro" style={delay400}>
              Hi! I’m <span className="highlight">Hunter Goff,</span> a senior
              Computer Engineering and Computer Sciences student at the
              University of Wisconsin - Madison. I'm interested in security
              engineering, renewable energy, and blockchains.
            </animated.p>
            <animated.div className="intro" style={delay500}>
              <LinkedinBtn />
              <GithubBtn />
              <EmailBtn />
              <ResumeBtn />
            </animated.div>
            <animated.div className="links" style={delay600}>
              <p>
                <a href="/books" onClick={(e) => navigateTo("books")}>
                  /books
                </a>{" "}
                <a href="/quotes" onClick={(e) => navigateTo("quotes")}>
                  /quotes
                </a>{" "}
                <a href="/more" onClick={(e) => navigateTo("more")}>
                  /more
                </a>{" "}
                {/* <a href="/other" onClick={(e) => navigateTo("other")}>
                  /other
                </a>{" "} */}
              </p>
            </animated.div>
          </div>
        </Col>
        <Col md={6}>
          <animated.div className="info-box vl" style={title}>
            <h1>Projects 💼</h1>
            <ul>
              <li>
                <a href="https://github.com/Huntare519/job-finder">
                  job-finder
                  <LinkBtn />
                </a>
                : a solution to checking every job board in during Fall
                semester.
              </li>
              <ul>
                <li> I built it using python and selenium.</li>
              </ul>
              <li>
                <a href="https://github.com/badgerblockchain/attendance-token">
                  attendance-token
                  <LinkBtn />
                </a>
                : a reward and front-end interface for students to check in to
                Badger Blockchain meetings.
              </li>
              <ul>
                <li>
                  {" "}
                  Built using solidity, react.js, and the graph protocol.
                </li>
              </ul>
              <li>
                <a href="https://github.com/Huntare519/elo">
                  elo <LinkBtn />
                </a>
                : a work in progress that uses a sqlite datebase to track the
                custom elo ranking of players in team-based games.
              </li>
            </ul>
          </animated.div>
          <animated.div className="info-box vl" style={delay400}>
            <h1>Favorites 🤝</h1>
            <ul>
              <li>My Favorite Movie: The Prestige.</li>
              <ul>
                <li className="quotes"> "Are you watching closely?"</li>
              </ul>
              <li>
                My Favorite Book(s): The Foundation Trilogy, The Lord of The
                Rings, The Wheel of Time.
              </li>
              <ul>
                <li className="quotes">
                  {" "}
                  "Almost dead yesterday, maybe dead tomorrow, but alive,
                  gloriously alive, today."
                </li>
              </ul>
              <li>Top TV Shows: Andor, True Detective: Season 1.</li>
              <ul>
                <li className="quotes">
                  {" "}
                  <a href="https://www.youtube.com/watch?v=GQMDmb3mOY8">
                    Stellan Skarsgård's Monologue - Andor episode 10
                    <LinkBtn />
                  </a>
                  , I mean, c'mon
                </li>
              </ul>
            </ul>
          </animated.div>
          <animated.div className="info-box vl-classes" style={delay500}>
            <h1>Relavent Classes 🎓</h1>
            <ul>
              <li className="classes">Spring 2023</li>
              <ul>
                <li>digital logic & design, software security, algorithims</li>
              </ul>
              <li className="classes">Fall 2022</li>
              <ul>
                <li>
                  operating systems, computer networking, sprint/agile/scrum
                  capstone
                </li>
              </ul>
              <li className="classes">Spring 2022</li>
              <ul>
                <li>artificial intelligence, embedded software engineering</li>
              </ul>
              <li className="classes">Fall 2021</li>
              <ul>
                <li>
                  on co-op at Sub-Zero Group, working in I&T Security, then as a
                  developer for the Internet-of-Things (IoT) team.
                </li>
              </ul>
            </ul>
          </animated.div>
        </Col>
      </Row>
    </Container>
  );
}
