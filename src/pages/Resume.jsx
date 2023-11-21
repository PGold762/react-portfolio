// Resume static page
import downloadIcon from "../assets/images/download.png";
import resumeFile from "../assets/files/test-resume.pdf";

export default function Resume() {
    return (
        <>
            <div>
                <p>Want to download my resume? Click the icon now: <Link to={resumeFile}><img src={downloadIcon} alt="Download Resume Icon" /></Link></p>
            </div>
            <div>
                <h2>My Proficiencies:</h2>
                <ul>
                    <li>HTML 5</li>
                    <li>CSS 3</li>
                    <li>Javascript</li>
                    <li>React</li>
                    <li>Node</li>
                    <li>Project Management</li>
                    <li>Team Building</li>
                </ul>
            </div>
        </>
    );
}
