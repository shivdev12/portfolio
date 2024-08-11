import "../styles/Projects.css";

export default function Projects() {
    return (
        <section className="Projects" id="projects">
            <h4>Portfolio</h4>
            <h3>Building design aesthetics with web technology to produce captivating sites.</h3>

            <div className="project-one">
                <div className="one-img-area interactable">
                    <a href="https://https://github.com/ShivamYadav-12/netflix-gpt">
                        <img src="/images/project.png" alt="project-pic" />
                    </a>
                </div>

                <div className="one-text-area">
                    <h4>ChitraVani</h4>
                    <p>A movie Recommendation System <br /> Dive into a world of cinema, explore genres,<br /> and find the perfect movie for any mood or occasion. <br />Whether you're into Bollywood blockbusters, indie gems, or global cinema
                        <br /> your next movie night is just a click away!</p>

                    <div className="stack">
                        <span className="tech">React</span>
                        <span className="tech">Tailwind</span>
                    </div>

                    <div className="links">
                        <a href="https://github.com/ShivamYadav-12/netflix-gpt">Code <i className="ri-github-line"></i></a>

                    </div>
                </div>
            </div>
        </section>
    )
}