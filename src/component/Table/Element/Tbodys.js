import React from 'react'
import PropTypes from "prop-types";
import { Tbody } from 'react-super-responsive-table';

import Trs from "./Trs";


const Tbodys = ({ tableData, coloumnConfig }) => {
    return (
            <Tbody>
                {tableData.map((person, index) => (
                       <Trs key={person._id} isTableHead={false} eachTableData={person} coloumnConfig={coloumnConfig} /> 
                ))}
            </Tbody> 
    )
}
Tbodys.propTypes = {
    tableData : PropTypes.arrayOf(PropTypes.object),
    coloumnConfig:PropTypes.arrayOf(PropTypes.object),
}
export default Tbodys
