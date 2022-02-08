import Card from "../shared/Card";
import PropTypes from "prop-types";

function FeedbackItem({ item }) {
    return (
        <div>
            <Card>
                <div className="num-display">{item.rating}</div>
                <div className="text-display">{item.text}</div>
            </Card>
        </div>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default FeedbackItem;
