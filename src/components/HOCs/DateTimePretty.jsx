import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import "moment/locale/ru";

const witchDateTimePretty = (Component) => {
  const HOCComponent = (props) => {
    const { text } = props;

    const transformPrettyTime = moment(text).fromNow();

    return <Component {...props} text={transformPrettyTime} />;
  };
  HOCComponent.displayName = "transformDatetimeHOC";

  return HOCComponent;
};

witchDateTimePretty.propTypes = {
  dateTime: PropTypes.string.isRequired,
};

export default witchDateTimePretty;
