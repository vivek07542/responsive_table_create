import React from 'react'
import PropTypes from "prop-types";
import {Td } from 'react-super-responsive-table';
import UserIcon from '../../UserIcon/UserIcon';
import Tags from '../../Tags/Tags';
import Status from '../../Status/Status';
const Tds = ({eachTableData,eachColoumnConfig}) => {
    
    let value = eachColoumnConfig.dataColoumn;
    let data = eachTableData[value];
    const eachTd = TdGeneratorCondition(eachColoumnConfig, data, eachTableData);
    return (
    <Td  className={eachColoumnConfig.className} data-heading={eachColoumnConfig.coloumnName}>{eachTd}</Td>
    )
}
Tds.propTypes = {
    eachTableData:PropTypes.object,
    eachColoumnConfig: PropTypes.object,
    id: PropTypes.oneOf([
        PropTypes.string,PropTypes.number
    ])
}
export default Tds;

const TdGeneratorCondition = (configuration, data, object) => {
    const action = configuration.coloumnType;
    let myArray = null;
    switch (action) {
        case "regular":
            return (<p>{data}</p>)
        case "circle":
            return (<UserIcon className={configuration.userIcon_Class}>{data}</UserIcon>)
        case "cylinder":
            return (<Tags data={data} />)
        case "rectangle":
            return (<Status>{data}</Status>)
        case "special":
            if (configuration.dataColoumn.includes(";")) {
                let text = configuration.dataColoumn;
                myArray = text.split(";");
            }
            return (<div className={configuration.specialColumnClass}>{object[myArray[0]]} <UserIcon color={configuration.backgroundColor}>{object[myArray[1]]}</UserIcon></div>)
        default:
            break;
    }
}