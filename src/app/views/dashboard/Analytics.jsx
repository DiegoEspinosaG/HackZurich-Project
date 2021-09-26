import React, { Fragment, useEffect, useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './Doughnut'
import StatCards from './StatCards'
import IncidentsCard from './IncidentsCard'
import { useTheme } from '@material-ui/styles'
import { getStats } from './Helpers/getData'

const Analytics = () => {
    const theme = useTheme();

    const [statsState, setStatsState] = useState({
        totalEmployees: '',
        totalBrigades: '',
        registeredUsers: '',
        missingUsers: '',
        totalIncidents: '',
    })

    useEffect(() => {
        async function getGeneralStats() {
            const result = await getStats();
            const { totalEmployees, totalBrigades, registeredUsers, missingUsers, totalIncidents } = result;
            setStatsState({
                totalEmployees: totalEmployees,
                totalBrigades: totalBrigades,
                registeredUsers: registeredUsers,
                missingUsers: missingUsers,
                totalIncidents: totalIncidents
            });
        }
        getGeneralStats();
    }, []);

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards statsState={statsState} />
                        <IncidentsCard statsState={statsState} />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">General report</div>
                            <div className="card-subtitle">Current situation</div>
                            <DoughnutChart
                                height="400px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                                statsState={statsState}
                            />
                        </Card>

                        {/* <UpgradeCard />

                        <Campaigns /> */}
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

const statsList = [
    {
        totalEmployees: '3050',
        totalBrigades: '85',
        registeredUsers: '3000',
        missingUsers: '50',
        totalIncidents: '1200',
    },
]

export default Analytics
