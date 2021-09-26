import React from 'react'
import { Grid, Card, Icon, Fab } from '@material-ui/core'

const IncidentsCard = ({ statsState }) => {
    return (
        <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-error">star_outline</Icon>
                        </Fab>
                        <h5 className="font-medium text-error m-0 ml-3">
                            Incidents
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">{statsState.totalIncidents}</h2>                        
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default IncidentsCard
