import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const deleteFeedback = (id) => {
        if (window.confirm("Delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <Fragment>
            <Header />
            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </div>
        </Fragment>
    );
}

export default App;
