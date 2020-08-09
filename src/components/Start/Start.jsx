import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Start.css'


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

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0: {
                setActiveStep(0);
                return;
            }
            case 1: {
                setActiveStep(1);
                return;
            }
            case 2: {
                setActiveStep(2);
                return;
            }
            case 3: {
                setActiveStep(3);
                return;
            }
            case 4: {
                setActiveStep(4);
                return;
            }
            case 5: {
                setActiveStep(5);
                return;
            }
            case 6: {
                setActiveStep(6);
                return;
            }
            case 7: {
                setActiveStep(7);
                return;
            }
            default: {
                setActiveStep(3);
                return;
            }
        }
    }

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
    }
    useEffect(() => {
        setSteps(initialData.question.map((_, index) => index));
    }, [initialData.question])
    return (
        <div style={{ backgroundImage: `url(${initialData.background_url})`, direction: "ltr", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>

            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel onClick={handleStep(index)}>{}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div>


            {
                initialData.question.map((item, index) =>
                    index == activeStep &&
                    <div key={item.id}>
                        <p>{item.text}</p>
                        {item.option.map(opt =>
                            <Button onClick={() => handleAnswer(item.id, opt.key)}>
                                {opt.text}
                            </Button>
                        )}
                    </div>
                )
            }
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


