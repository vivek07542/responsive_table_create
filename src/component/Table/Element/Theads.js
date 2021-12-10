import React from 'react'
import PropTypes from "prop-types";
import { Thead} from 'react-super-responsive-table';

import Trs from "../Element/Trs";

const Theads = ({ coloumnConfig, onSortHandler }) => {
 
    return (
        <>
            <Thead>
                <Trs coloumnConfig = {coloumnConfig} onSortHandler ={(col, action)=>onSortHandler(col, action)} isTableHead={true} />
            </Thead>
       </>
    )
}
Theads.propTypes = {
    coloumnConfig:PropTypes.arrayOf(PropTypes.object).isRequired,
    onSortHandler:PropTypes.func
}
export default Theads;