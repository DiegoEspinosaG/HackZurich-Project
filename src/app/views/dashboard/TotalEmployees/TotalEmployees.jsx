import React, { Fragment, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import TotalEmployeesTable from './TotalEmployeesTable'
import { getTotalEmployees } from '../Helpers/getData';

const TotalEmployees = () => {

    const [totalEmployeesState, setTotalEmployeesState] = useState({
        data: []
    });

    useEffect(() => {
        async function getEmployees() {
            const result = await getTotalEmployees();
            const { data } = result;
            console.log(data);
            setTotalEmployeesState({
                data: data
            });
            console.log(totalEmployeesState);
        }
        getEmployees();
    }, []);

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TotalEmployeesTable />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default TotalEmployees