import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);
    return (
        <Fragment>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </Fragment>
    );
}

export default App;
