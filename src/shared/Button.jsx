import PropTypes from "prop-types";
function Button({ childeren, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {childeren}
        </button>
    );
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false,
};

Button.propTypes = {
    childeren: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};

export default Button;
