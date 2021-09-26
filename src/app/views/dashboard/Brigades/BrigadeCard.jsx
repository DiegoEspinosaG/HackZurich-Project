import React from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SimpleCard } from 'app/components'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const BrigadeCard = ({ brigade }) => {
    const classes = useStyles()

    return (
        <SimpleCard title={brigade} className="mb-3">
            <Grid container spacing={3} className="mb-3">
                <Grid item xs={12} md={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={6}
                    >
                        <div className="flex items-center">
                            <Icon className={classes.icon}>group</Icon>
                            <div className="ml-3">
                                <small className="text-muted">Users in the brigade</small>
                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    8
                                </h6>
                            </div>
                        </div>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="flex flex-wrap justify-between align-center p-sm-24 bg-paper"
                        elevation={6}
                    >
                        <div className="flex items-center">
                            <Icon className={classes.icon}>record_voice_over_icon</Icon>
                            <div className="ml-3">
                                <small className="text-muted line-height-1">
                                Brigade leader
                                </small>
                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    Emma
                                </h6>
                            </div>
                        </div>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={6}
                    >
                        <div className="flex items-center">
                            <Icon className={classes.icon}>verified_user</Icon>
                            <div className="ml-3">
                                <small className="text-muted">
                                    Registered users
                                </small>
                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    7
                                </h6>
                            </div>
                        </div>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card
                        className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                        elevation={6}
                    >
                        <div className="flex items-center">
                            <Icon className={classes.icon}>person_add_disabled</Icon>
                            <div className="ml-3">
                                <small className="text-muted">
                                    Missing users
                                </small>
                                <h6 className="m-0 mt-1 text-primary font-medium">
                                    1
                                </h6>
                            </div>
                        </div>
                        <Tooltip title="View Details" placement="top">
                            <IconButton>
                                <Icon>arrow_right_alt</Icon>
                            </IconButton>
                        </Tooltip>
                    </Card>
                </Grid>
            </Grid>
        </SimpleCard>
    )
}

export default BrigadeCard