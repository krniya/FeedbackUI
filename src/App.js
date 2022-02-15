import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIconLink from "./components/AboutIconLink";

function App() {
    const [feedback, setFeedback] = useState(FeedbackData);

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    const deleteFeedback = (id) => {
        if (window.confirm("Delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    return (
        <Router>
            <Header />
            <div className="container">
                <Route exact path="/">
                    <FeedbackForm handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
                </Route>
                <Route path="/about" component={AboutPage} />
                <AboutIconLink />
            </div>
        </Router>
    );
}

export default App;
