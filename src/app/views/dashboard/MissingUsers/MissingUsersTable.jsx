import React from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    employeeTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const MissingUsersTable = () => {
    const classes = useStyles()

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Missing Users</span>
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.employeeTable
                    )}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell className="px-6" colSpan={4}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Brigade
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Last Location
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Status
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Details
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {employeeList.map((employee, index) => (
                            <TableRow key={index} hover>
                                <TableCell
                                    className="px-0 capitalize"
                                    colSpan={4}
                                    align="left"
                                >
                                    <div className="flex items-center">
                                        <Avatar src={employee.imgUrl} />
                                        <p className="m-0 ml-8">
                                            {employee.name}
                                        </p>
                                    </div>
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    {employee.brigade}
                                </TableCell>
                                <TableCell
                                    className="px-0 capitalize"
                                    align="left"
                                    colSpan={2}
                                >
                                    {employee.location}
                                </TableCell>

                                <TableCell
                                    className="px-0"
                                    align="left"
                                    colSpan={2}
                                >
                                    {employee.status === 'Safe' ? (
                                        <small className="border-radius-4 bg-green text-white px-2 py-2px">
                                            {employee.status}
                                        </small>
                                    ) : (
                                        employee.status === 'Injured' ? (
                                            <small className="border-radius-4 bg-secondary text-white px-2 py-2px">
                                                {employee.status}
                                            </small>
                                        ) : (
                                            employee.status === 'Delicate' ? (
                                                <small className="border-radius-4 bg-error text-white px-2 py-2px">
                                                    {employee.status}
                                                </small>
                                            ) : (
                                                employee.status === 'Dead' ? (
                                                    <small className="border-radius-4 bg-dark text-white px-2 py-2px">
                                                        {employee.status}
                                                    </small>
                                                ) : (
                                                    <small className="border-radius-4 bg-gray text-white px-2 py-2px">
                                                        {employee.status}
                                                    </small>
                                                )
                                            )
                                        )
                                    )}
                                    {
                                        //formatStatus(employee.status)
                                    }
                                </TableCell>
                                <TableCell className="px-0" colSpan={1}>
                                    <IconButton>
                                        <Icon color="primary">visibility</Icon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </Card >
    )
}

const employeeList = [
    {
        imgUrl: 'https://i2.wp.com/www.diarlu.com/wp-content/uploads/2019/09/mujer-mirada-profunda.jpg?resize=500%2C500&ssl=1',
        name: 'Emma',
        brigade: 'A',
        location: 'Office C',
        status: 'Safe',
    },
    {
        imgUrl: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/mujer-rubia.jpg?resize=500%2C500&ssl=1',
        name: 'Ava',
        brigade: 'A',
        location: 'Conference room',
        status: 'Injured',
    },
    {
        imgUrl: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1',
        name: 'Mohamed',
        brigade: 'B',
        location: 'Conference room',
        status: 'Delicate',
    },
    {
        imgUrl: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/rostro-mujer-adulta.jpg?resize=500%2C500&ssl=1',
        name: 'Judith',
        brigade: 'B',
        location: 'Bathroom',
        status: 'Dead',
    },
    {
        imgUrl: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/hombre-maduro-guapo.jpg?resize=500%2C500&ssl=1',
        name: 'Alí',
        brigade: 'A',
        location: 'Office A',
        status: 'Missing',
    },
]

export default MissingUsersTable