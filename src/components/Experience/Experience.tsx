import { Container } from './styles'
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
    return (
        <Container id="experience">
            <h2>Experience</h2>
            <div className="experiences">

                {/* Experience Item 1 */}
                <ScrollAnimation animateIn="fadeInUp">
                    <div className="experience">
                        <header>
                            <svg
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#23ce6b"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>Briefcase</title>
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <div className="duration">
                                June 2023 - Present
                            </div>
                        </header>
                        <div className="body">
                            <h3>Junior Software Engineer</h3>
                            <h4 className="company">Technostacks Infotech Pvt Ltd</h4>
                            <p>
                                Designed and developed full-stack applications using TypeScript, React, and Node.js, enhancing system scalability.
                                Implemented and optimized RESTful APIs, supporting over large amount of daily active users with high availability.
                                Improved application performance by 40% through various optimization techniques and monitoring strategies.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>React</li>
                                <li>Node.js</li>
                                <li>TypeScript</li>
                                <li>Postgresql</li>
                                <li>MongoDB</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

                {/* Experience Item 2 */}
                <ScrollAnimation animateIn="fadeInUp">
                    <div className="experience">
                        <header>
                            <svg
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                                role="img"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#23ce6b"
                                strokeWidth="1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <title>Briefcase</title>
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            <div className="duration">
                                Jan 2023 - June 2023
                            </div>
                        </header>
                        <div className="body">
                            <h3>Software Engineer Trainee</h3>
                            <h4 className="company">Technostacks Infotech Pvt Ltd</h4>
                            <p>
                                Developed a project similar to Google Drive during my internship, showcasing my ability to create innovative software solutions.
                                Collaborated with a team to ensure the project's functionality and user experience met high standards.
                                Recognized as one of the best projects in my batch, reflecting my commitment to excellence.
                                Gained valuable experience in software development and teamwork at Technostacks Infotech Private Limited, a dynamic startup in Ahmedabad.
                            </p>
                        </div>
                        <footer>
                            <ul className="tech-list">
                                <li>JavaScript</li>
                                <li>HTML/CSS</li>
                                <li>React</li>
                                <li>NodeJs</li>
                                <li>MongoDB</li>
                            </ul>
                        </footer>
                    </div>
                </ScrollAnimation>

            </div>
        </Container>
    );
}
