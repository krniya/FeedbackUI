import Card from "../shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
    return (
        <div>
            <Card>
                <div className="num-display">{item.rating}</div>
                <button className="close" onClick={() => handleDelete(item.id)}>
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
