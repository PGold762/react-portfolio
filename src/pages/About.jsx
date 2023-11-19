// About Me static page
import pgImage from "../assets/images/pg.jpg";

export default function AboutPage() {
    return (
        <>
            <div>
                <p>Hello! My name is Phillip Goldberg. I've been in the web development field for over 22 years including full website builds, project management, managing teams of developers, running a website development company, and so much more.</p>
            </div>
            <div>
            <img src={pgImage} alt="Phillip Goldberg Profile Picture" />
            </div>
        </>
    );
}
