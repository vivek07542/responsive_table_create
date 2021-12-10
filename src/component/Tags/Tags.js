import React from 'react'
// import "./Tags.css";
import PropTypes from "prop-types";

const Tags = (props) => {
    const { className,children,data, ...allProps } = {...props};
  
    let classNameProp = ["tag-container"];
    if (className) {
      classNameProp.push(className);
    }
    let assignedClass = classNameProp.join(" ");
    const eachTag = data.map((e, index) =>
        <div key={index} className={assignedClass} {...allProps}>
            {e}
        </div>
    )
    return (
        <div className="tags-wrapper">
            {eachTag}
        </div>
    )
}
Tags.propTypes = {
    className : PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
    data:PropTypes.array
      
}
export default Tags
