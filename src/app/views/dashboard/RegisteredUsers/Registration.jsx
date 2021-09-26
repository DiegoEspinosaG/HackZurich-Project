import React, { Fragment } from 'react'
import { Grid, Card, Icon, IconButton, Tooltip, Radio, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import { SimpleCard } from 'app/components'
import { makeStyles } from '@material-ui/core/styles'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useState } from 'react'
import { useEffect } from 'react'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import { RadioGroup } from '@material-ui/core'
import { FormControlLabel } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    icon: {
        fontSize: '44px',
        opacity: 0.6,
        color: palette.primary.main,
    },
}))

const Registration = () => {
    const theme = useTheme()
    const classes = useStyles()

    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    const {
        username,
        firstName,
        creditCard,
        mobile,
        password,
        confirmPassword,
        gender,
        date,
        email,
    } = state

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                        <SimpleCard title="Simple Form">
                            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Username (Min length 4, Max length 9)"
                                            onChange={handleChange}
                                            type="text"
                                            name="username"
                                            value={username || ''}
                                            validators={[
                                                'required',
                                                'minStringLength: 4',
                                                'maxStringLength: 9',
                                            ]}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="First Name"
                                            onChange={handleChange}
                                            type="text"
                                            name="firstName"
                                            value={firstName || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Email"
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={email || ''}
                                            validators={['required', 'isEmail']}
                                            errorMessages={[
                                                'this field is required',
                                                'email is not valid',
                                            ]}
                                        />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                className="mb-4 w-full"
                                                margin="none"
                                                id="mui-pickers-date"
                                                label="Date picker"
                                                inputVariant="standard"
                                                type="text"
                                                autoOk={true}
                                                value={date}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <TextValidator
                                            className="mb-8 w-full"
                                            label="Credit Card"
                                            onChange={handleChange}
                                            type="number"
                                            name="creditCard"
                                            value={creditCard || ''}
                                            validators={[
                                                'required',
                                                'minStringLength:16',
                                                'maxStringLength: 16',
                                            ]}
                                            errorMessages={['this field is required']}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Mobile Nubmer"
                                            onChange={handleChange}
                                            type="text"
                                            name="mobile"
                                            value={mobile || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Password"
                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            value={password || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Confirm Password"
                                            onChange={handleChange}
                                            name="confirmPassword"
                                            type="password"
                                            value={confirmPassword || ''}
                                            validators={['required', 'isPasswordMatch']}
                                            errorMessages={[
                                                'this field is required',
                                                "password didn't match",
                                            ]}
                                        />
                                        <RadioGroup
                                            className="mb-4"
                                            value={gender || ''}
                                            name="gender"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value="Male"
                                                control={<Radio color="secondary" />}
                                                label="Male"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="Female"
                                                control={<Radio color="secondary" />}
                                                label="Female"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="Others"
                                                control={<Radio color="secondary" />}
                                                label="Others"
                                                labelPlacement="end"
                                            />
                                        </RadioGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I have read and agree to the terms of service."
                                        />
                                    </Grid>
                                </Grid>
                                <Button color="primary" variant="contained" type="submit">
                                    <Icon>send</Icon>
                                    <span className="pl-2 capitalize">Submit</span>
                                </Button>
                            </ValidatorForm>
                        </SimpleCard>
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <SimpleCard title="Simple Form">
                            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                                <Grid container spacing={6}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Username (Min length 4, Max length 9)"
                                            onChange={handleChange}
                                            type="text"
                                            name="username"
                                            value={username || ''}
                                            validators={[
                                                'required',
                                                'minStringLength: 4',
                                                'maxStringLength: 9',
                                            ]}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="First Name"
                                            onChange={handleChange}
                                            type="text"
                                            name="firstName"
                                            value={firstName || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Email"
                                            onChange={handleChange}
                                            type="email"
                                            name="email"
                                            value={email || ''}
                                            validators={['required', 'isEmail']}
                                            errorMessages={[
                                                'this field is required',
                                                'email is not valid',
                                            ]}
                                        />

                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                className="mb-4 w-full"
                                                margin="none"
                                                id="mui-pickers-date"
                                                label="Date picker"
                                                inputVariant="standard"
                                                type="text"
                                                autoOk={true}
                                                value={date}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <TextValidator
                                            className="mb-8 w-full"
                                            label="Credit Card"
                                            onChange={handleChange}
                                            type="number"
                                            name="creditCard"
                                            value={creditCard || ''}
                                            validators={[
                                                'required',
                                                'minStringLength:16',
                                                'maxStringLength: 16',
                                            ]}
                                            errorMessages={['this field is required']}
                                        />
                                    </Grid>

                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Mobile Nubmer"
                                            onChange={handleChange}
                                            type="text"
                                            name="mobile"
                                            value={mobile || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Password"
                                            onChange={handleChange}
                                            name="password"
                                            type="password"
                                            value={password || ''}
                                            validators={['required']}
                                            errorMessages={['this field is required']}
                                        />
                                        <TextValidator
                                            className="mb-4 w-full"
                                            label="Confirm Password"
                                            onChange={handleChange}
                                            name="confirmPassword"
                                            type="password"
                                            value={confirmPassword || ''}
                                            validators={['required', 'isPasswordMatch']}
                                            errorMessages={[
                                                'this field is required',
                                                "password didn't match",
                                            ]}
                                        />
                                        <RadioGroup
                                            className="mb-4"
                                            value={gender || ''}
                                            name="gender"
                                            onChange={handleChange}
                                            row
                                        >
                                            <FormControlLabel
                                                value="Male"
                                                control={<Radio color="secondary" />}
                                                label="Male"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="Female"
                                                control={<Radio color="secondary" />}
                                                label="Female"
                                                labelPlacement="end"
                                            />
                                            <FormControlLabel
                                                value="Others"
                                                control={<Radio color="secondary" />}
                                                label="Others"
                                                labelPlacement="end"
                                            />
                                        </RadioGroup>
                                        <FormControlLabel
                                            control={<Checkbox />}
                                            label="I have read and agree to the terms of service."
                                        />
                                    </Grid>
                                </Grid>
                                <Button color="primary" variant="contained" type="submit">
                                    <Icon>send</Icon>
                                    <span className="pl-2 capitalize">Submit</span>
                                </Button>
                            </ValidatorForm>
                        </SimpleCard>
                    </Grid>

                </Grid>

            </div>
        </Fragment>
    )
}

export default Registration