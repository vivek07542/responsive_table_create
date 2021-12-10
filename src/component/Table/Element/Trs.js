import React from 'react'
import PropTypes from "prop-types";
import { Tr } from 'react-super-responsive-table';

import Ths from "../Element/Ths";
import Tds from "../Element/Tds";

const Trs = ({ coloumnConfig, onSortHandler, isTableHead, eachTableData }) => {

    let generateTd = coloumnConfig.map((col, index) => (
            isTableHead ?
            <Ths key={ index} eachColoumnConfig={ col} onSortHandler={(col, action)=>onSortHandler(col, action)}/>
        :
             <Tds key={index} eachColoumnConfig={ col}  eachTableData={eachTableData}/>
        ))
        
    return (
        
        <Tr className="col">
            {generateTd}
        </Tr>
            
    )
}
Trs.propTypes = {
    isTableHead:PropTypes.bool,
    eachTableData : PropTypes.object,
    coloumnConfig:PropTypes.arrayOf(PropTypes.object),
    onSortHandler:PropTypes.func
}
export default Trs
