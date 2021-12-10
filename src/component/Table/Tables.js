import React from 'react'
import { Table} from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Theads from "./Element/Theads";
import Tbodys from "./Element/Tbodys";
import { coloumnConfig } from '../../Config/Config';
import { persons } from "../../Config/Mock/Mock";

const Tables = () => {
    const onSortHandler = (col, action) => {
        console.log(col, action);
    }
    return (
       
            <Table>
                <Theads coloumnConfig={coloumnConfig} onSortHandler={(col, action)=>onSortHandler(col, action)} />
                <Tbodys tableData={persons} coloumnConfig={coloumnConfig}/>
            </Table>
        
    )
}

export default Tables
