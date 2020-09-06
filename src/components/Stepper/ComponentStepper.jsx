import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Step from '@material-ui/core/Step';
import clsx from "clsx";
import Stepper from '@material-ui/core/Stepper';
import StepLabel from '@material-ui/core/StepLabel';
import StepConnector from "@material-ui/core/StepConnector";
import Container from '@material-ui/core/Container';
import './ComponentStepper.css'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 2
    },
    active: {
        "& $line": {
            backgroundImage: "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)",
            display: "block",
        }
    },
    completed: {
        "& $line": {
            backgroundImage: "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)",
            display: "block",
        }
    },
    line: {
        height: 20,
        border: 10,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
        display: "none",
        padding: "0 3rem",
        marginLeft: "-1.5rem",
    }
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: "#ccc",
        zIndex: 1,
        color: "#fff",
        width: 25,
        height: 25,
        display: "flex",
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
    },
    active: {
        backgroundImage: "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)",
        boxShadow: "0 0 0px 5px rgba(237,134,93,.6)",
        transition: "1s all ease"
    },
    completed: {
        backgroundImage: "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)"
    }
});

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed
            })}
        ></div>
    );
}


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    myStepper: {
        background: "transparent",
        margin: "0 15rem"
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));



function ComponentStepper({ handleAnswer, activeStep, setActiveStep, outPut, initialData }) {

    const classes = useStyles();

    const [steps, setSteps] = useState([])

    const handleStep = (step) => () => {
        setActiveStep(step);
    };
    useEffect(() => {
        setSteps(initialData.question.map((_, index) => index));
    }, [initialData.question])



    return (
        <div>
            <div className={classes.root} style={{ marginBottom: "5rem" }}>
                <Container>
                    <Stepper
                        className={classes.myStepper}
                        alternativeLabel
                        activeStep={activeStep}
                        connector={<ColorlibConnector />}
                    >
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Container>
            </div>
        </div>
    )
}

export default ComponentStepper
