import React, { Fragment } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip } from '@material-ui/core'
import { SimpleCard } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import BrigadeCard from './BrigadeCard'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const RegisteredUsers = () => {
    const classes = useStyles()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <BrigadeCard
                    brigade={"Brigade A"}
                />
                <BrigadeCard
                    brigade={"Brigade B"}
                />
            </div>
        </Fragment>
    )
}

export default RegisteredUsers