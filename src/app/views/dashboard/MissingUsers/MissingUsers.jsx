import React, { Fragment } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import MissingUsersTable from './MissingUsersTable'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const MissingUsers = () => {
    const theme = useTheme()
    const classes = useStyles()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <MissingUsersTable />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default MissingUsers