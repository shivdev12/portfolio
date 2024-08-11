import "../styles/Home.css"

export default function Home(){
    return(
        <section className="Home" id="home">
            <div className="main">
                <div className="main-text-area">
                    <h1>Full Stack <br/> Developer</h1>
                    <p>Hi, I am Shivam Yadav. A passionate Full Stack <br/> Developer based in Ghaziabad, Uttar Pradesh.</p>
                    <span className="icons">
                    <a href="https://www.linkedin.com/in/shivam-yadav-72abaa266/"><i class="ri-linkedin-box-line"></i></a>
                    <a href="https://github.com/ShivamYadav-12"><i class="ri-github-line"></i></a>
                    </span>
                </div>
                <div className="main-img-area">
                    <img src="/images/hero.png" alt="profile" />
                </div>
            </div>

            <div className="skills">
                <h3>Tech Stack</h3>
                <p>|</p>
                <div className="skills-icon">
                <img src="https://skillicons.dev/icons?i=html,css,js,mongodb" />
                </div>
                <div className="skills-icon">
                <img src="https://skillicons.dev/icons?i=react,tailwind,next,docker" />
                </div>
            </div>
        </section>
    )
}