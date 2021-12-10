import React from 'react'
import PropTypes from "prop-types";
import { Th } from 'react-super-responsive-table';
import { BiCaretUp, BiCaretDown } from "react-icons/bi";

const Ths = ({ eachColoumnConfig, onSortHandler }) => {

    return (
        <Th className="col">
            <div className="table-thead-container row justify-content-center text-center">
                {eachColoumnConfig.coloumnName}
                <div className="thead-button--container">
                    <button className="table-sort-button" onClick={() => onSortHandler(eachColoumnConfig.dataColoumn, "asc")}><BiCaretUp /></button>
                    <button className="table-sort-button" onClick={() => onSortHandler(eachColoumnConfig.dataColoumn, "desc")}><BiCaretDown /></button>
                </div>
            </div>
        </Th>
    )
}
Ths.propTypes = {
    onSortHandler: PropTypes.func,
    eachColoumnConfig:PropTypes.object
}
export default Ths
