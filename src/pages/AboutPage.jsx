import { Link } from "react-router-dom";
import Card from "../shared/Card";

function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsa mollitia
                    similique quia assumenda porro voluptatum ex incidunt quasi magnam nisi unde quo
                    cum, nam minima sapiente numquam, omnis odit.
                </p>
                <p>version: 1.0.0</p>
                <Link to="/">Home</Link>
            </div>
        </Card>
    );
}

export default AboutPage;
