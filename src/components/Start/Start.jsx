import React, { useState, useEffect } from 'react'
import {Container} from 'reactstrap';
import ComponentStepper from '../Stepper/ComponentStepper'
import './Start.css'
import Question from '../Question/Question';


function Start({ initialData, setOutPut, outPut }) {
    const [activeStep, setActiveStep] = useState(0);

    

    return (
        <div style={{ backgroundImage: `url(${initialData.background_url})`, backgroundPosition: "center 30%", direction: "ltr", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh" }}>
            <Container fluid={true}>
                <ComponentStepper activeStep={activeStep} setActiveStep={setActiveStep} initialData={initialData} />

                <Question activeStep={activeStep} setActiveStep={setActiveStep} initialData={initialData} 
                setOutPut={setOutPut} outPut={outPut}/>
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


