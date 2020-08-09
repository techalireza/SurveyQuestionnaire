import React, { useState, useEffect } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import clsx from "clsx";
import StepConnector from "@material-ui/core/StepConnector";
import './Start.css'

const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 2
    },
    active: {
        "& $line": {
            backgroundImage:
                "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)"
        }
    },
    completed: {
        "& $line": {
            backgroundImage:
            "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)"
        }
    },
    line: {
        height: 20,
        border: 10,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
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
        alignItems: "center"
    },
    active: {

        backgroundImage:
        "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)",
        // border: "solid 10px rgba(184, 59, 94, 0.56)",
        // width: 45,
        // height: 45,
    },
    completed: {

        backgroundImage:
        "linear-gradient(to right, #f08a5d 0%, #b83b5e 99%)"
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
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));



function Start({ initialData, setOutPut, outPut }) {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState([])


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleAnswer = (id, key) => {
        outPut.find(item => item.id == id) ? setOutPut(
            outPut.map(item => item.id == id ? { id: id, answer: key } : item)
        ) : setOutPut([...outPut, { id: id, answer: key }])
        handleNext();
        console.log(outPut)
    }
    useEffect(() => {
        setSteps(initialData.question.map((_, index) => index));
    }, [initialData.question])
    return (
        <div style={{ backgroundImage: `url(${initialData.background_url})`,backgroundPosition:"center 30%", direction: "ltr", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
            <Container>
                <div className={classes.root} style={{ marginBottom: "10rem" }}>

                    <Stepper
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
                </div>

                {
                    initialData.question.map((item, index) =>
                        index == activeStep &&
                        <div key={item.id} style={{ textAlign: "center" }}>
                            <p>{item.text}</p>
                            {item.option.map(opt =>
                                <Button style={{ color: "#fff" }} onClick={() => handleAnswer(item.id, opt.key)}>
                                    {opt.text}
                                </Button>
                            )}
                        </div>
                    )
                }
            </Container>
        </div >
    )
}


export default Start












// import React, { useState, useEffect } from 'react'
// import Stepper from 'react-stepper-horizontal'
// import { Button, Col, Container, Row } from 'reactstrap';
// import './Start.css'

// function Start({ initialData, setOutPut, outPut }) {
//     const [checkEditAnswer, setCheckEditAnswer] = useState(false)
//     const [steps, setSteps] = useState([
//         {
//             onClick: () => {
//                 setCurrentStep(0)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(1)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(2)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(3)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(4)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(5)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(6)
//             },
//         },
//         {
//             onClick: () => {
//                 setCurrentStep(7)
//             },
//         }
//     ]);
//     const [currentStep, setCurrentStep] = useState(0)
//     const onClickNext = () => {
//         setCurrentStep(currentStep + 1);
//         setCheckEditAnswer(false);
//     }
//     const handleAnswer = (id, key) => {
//         outPut.find(item => item.id == id) ? setOutPut(
//             outPut.map(item => item.id == id ? { id: id, answer: key } : item)
//         ) : setOutPut([...outPut, { id: id, answer: key }])
//         onClickNext();
//     }
//     useEffect(() => {
//         console.log(outPut);
//     })
//     return (
//         <div style={{ backgroundImage: `url(${initialData.background_url})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
//             <Container>

//                 <div style={{ direction: "ltr" }}>
//                     <Stepper activeColor={'#ff00ff'} completeColor={'#00ff00'} circleFontSize={16} defaultBarColor={'transparent'} completeBarColor={'#ffff00'}
//                     lineMarginOffset={0} circleFontColor={'transparent'}
//                     steps={steps} activeStep={currentStep} activeStep={currentStep} />
//                 </div>
//                 {
//                     initialData.question.map((item, index) =>
//                         index == currentStep &&
//                         <div key={item.id}>
//                             <p>{item.text}</p>
//                             {item.option.map(opt =>
//                                 <Button onClick={() => handleAnswer(item.id, opt.key)}>
//                                     {opt.text}
//                                 </Button>
//                             )}
//                         </div>
//                     )
//                 }
//             </Container>
//         </div >
//     )
// }

// export default Start


