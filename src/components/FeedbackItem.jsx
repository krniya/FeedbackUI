import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
    const { deleteFeedback } = useContext(FeedbackContext);
    return (
        <div>
            <Card>
                <div className="num-display">{item.rating}</div>
                <button className="close" onClick={() => deleteFeedback(item.id)}>
                    <FaTimes color="purple" />
                </button>
                <div className="text-display">{item.text}</div>
            </Card>
        </div>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
