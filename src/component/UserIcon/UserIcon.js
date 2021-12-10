import React from 'react'
// import "./UserIcon.css";
import PropTypes from "prop-types";

const UserIcon = (props) => {
    const { className,color,children, ...allProps } = {...props};
  
  let classNameProp = ["userIcon-container-shape "];
  if (className) {
    classNameProp.push(className);
  }
  let assignedClass = classNameProp.join(" ");
  const personInitial = children[0];
  const upperCaseInitial = personInitial.toUpperCase();
  const colorScheme = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D']
  const validateLetterColor = checkLetterColor(upperCaseInitial,colorScheme);

    return (
        <div className={assignedClass} style={{ backgroundColor: validateLetterColor }} {...allProps}>
             {upperCaseInitial}
        </div>   
        
    )
}
UserIcon.propTypes = {
    className : PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string
}
export default UserIcon

const checkLetterColor = (alphabet, color) => {
 let lowerCase = alphabet.toLowerCase();
  for (let i = 0; i < 26; i++) {
    let letter = (i + 10).toString(36);
    if (letter === lowerCase) {       
      return color[i];
    }
  }
}
