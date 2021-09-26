import React, { Fragment } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import RegisteredUsersSchema from './RegisteredUsersSchema'
import RegisteredUsersTable from './RegisteredUsersTable'
import { SimpleCard } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const RegisteredUsers = () => {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <RegisteredUsersSchema />
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <SimpleCard title="Report">
                            <Grid item xs={12} md={12} className="mb-3">
                                <Card
                                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                                    elevation={6}
                                >
                                    <div className="flex items-center">
                                        <Icon className={classes.icon}>group_work</Icon>
                                        <div className="ml-3">
                                            <small className="text-muted">Brigade users</small>
                                            <h6 className="m-0 mt-1 text-primary font-medium">
                                                8
                                            </h6>
                                        </div>
                                    </div>                                    
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={12} className="mb-3">
                                <Card
                                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                                    elevation={6}
                                >
                                    <div className="flex items-center">
                                        <Icon className={classes.icon}>verified_user</Icon>
                                        <div className="ml-3">
                                            <small className="text-muted">Registered users</small>
                                            <h6 className="m-0 mt-1 text-primary font-medium">
                                                4
                                            </h6>
                                        </div>
                                    </div>                                    
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={12} className="mb-3">
                                <Card
                                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                                    elevation={6}
                                >
                                    <div className="flex items-center">
                                        <Icon className={classes.icon}>person_add_disabled</Icon>
                                        <div className="ml-3">
                                            <small className="text-muted">Missing users</small>
                                            <h6 className="m-0 mt-1 text-primary font-medium">
                                                2
                                            </h6>
                                        </div>
                                    </div>                                    
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={12} className="mb-3">
                                <Card
                                    className="flex flex-wrap justify-between items-center p-sm-24 bg-paper"
                                    elevation={6}
                                >
                                    <div className="flex items-center">
                                        <Icon className={classes.icon}>group</Icon>
                                        <div className="ml-3">
                                            <small className="text-muted">Users of another brigade</small>
                                            <h6 className="m-0 mt-1 text-primary font-medium">
                                                2
                                            </h6>
                                        </div>
                                    </div>                                    
                                </Card>
                            </Grid>
                        </SimpleCard>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <RegisteredUsersTable />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default RegisteredUsers