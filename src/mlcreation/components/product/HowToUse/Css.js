import styled from "styled-components";
import React from 'react';
import {productImagePath} from '../../../common/config.js';

export const path=productImagePath;


export const topPosition = '150px';

export const OutterWrapper=styled.div`
display:flex;
position:relative;
//background-color:${(props)=>props.color};
width:100%;
height:100%;
border:1px solid white;
justify-content:${(props)=>props.left?'flex-start':'flex-end'};
`;

export const TextDiv=styled.div`
width:100%;
margin-right:${(props)=>props.right};
margin-left:${(props)=>props.left};
border:0px solid red;
z-index:2;
 `;

 export const LTextDiv=styled.div`
 width:100%;
 margin-right:${(props)=>props.right};
 margin-left:140px;
 border:0px solid red;
 z-index:2;
 `;

export const Image_A=styled.div`
position:absolute;
top:${(props)=>props.top};
right:${(props)=>props.right};
left:${(props)=>props.left};
background-image:url(${(props)=>props.img});
background-repeat:no-repeat;
background-size:contain;
background-position:center center;
width:200px;
height:200px;

z-index:1;
border:0px solid grey;
 `;


export const text={
EVVA:{
desc:`
Placing in the vagina during the day
strong and tightening abdominal muscles and genitals.
The build-in metal balls cause an obvious sense of collision when walking.
Use not more than 30 minutes per day
`,    
clean:`
•    It’s splashproof.
•    Clean it with antibacterial soap after each use.
•    Do not use alcohol, acetone-based or gasoline-based cleaning products.
`,
functions:`
Placing in the vagina during the day
strong and tightening abdominal muscles and genitals.
The built-in metal balls cause an obvious sense of collision when walking.
Use not more than 30 minutes per day
`

},    
BR:{
desc:
`
Bottom bulgy ball will prolongs sex time

10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1.5 hours usage
`,    
charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
    each quickly press changes one mode,after the 10th mode,  
    the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
    the vibration mode will changes to the 10-auto cycle mode.
    To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.`
},
CB:{
desc:`
8 vibration modes, 1 vibration intensit.
Can choose the 8-auto cycle mode.

1.5 hours of charging = 1.5 hours usage
`,    
    charge:`
A.  Turn back the vibrator cover and pull it out.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing (see picture).
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1.5  hours of charging = 1.5 hours of usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 8 different modes.
    each quickly press changes one mode, after the 8th mode,
    the vibration will go back to the 1st mode.
C.  For choose the 8-auto cycle mode, just quickly press the button twice, 
    the vibration mode will changes to the 8-auto cycle mode.
    To get out the 8-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.    
    `
},
CBR:{
desc:
`
10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1 hours usage
`,      
    charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing .
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1 hour usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.
`
},
GB:{
desc:`
8 vibration modes, each mode has 3 vibration intensities.

1 hour of charging = 70 minutes usage
`,    
    charge:`
A.  Turn back the vibrator cover and pull it out.
B.  Gently insert the USB charger into the Recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
    
    
*    Please fully charge it before first use.
*    1 hour of charging = 70 minutes usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
    `,
    button:`
A.  Just quickly press the button once to turn it on.
     Once switched on, it starts on the first mode and weakest intensity.
B.  After turned on, you can choose 8 different modes,
     each quickly press changes one mode, after the 8th mode, 
     the vibration will go back to the 1st mode.
C.  After turned on, you can choose 3 kinds of vibration intensity for any vibration mode.
     The first time quickly press the button twice, the vibration intensity will be upgraded to the
     second strength. 
     The second time quickly press the button twice, the vibration intensity will be upgraded  
     to the third strength. 
     The third time quickly press the button twice, the vibration intensity will go back to the 
     weakest strength.
D.  Switch it off, just press the button for one second.    
`
},
GF:{
desc:`
10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1.5 hours usage
`,    
    charge:`
A.  Push the inner bullet out from the hole of Zinc Alloy Outer Sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
    
    
*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.    
`
},
PF:{
desc:`
10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1 hour usage
`,    
    charge:`
A.  Turn back the vibrator cover and pull it out.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing .
D.  Once fully recharged, the light indication will stay on.
    
    
*    Please fully charge it before first use.
*    1 hour of charging = 1 hour usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.

    `,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.
    `
},
PR:{
desc:`
10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1 hour usage
`,    
    charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1 hour usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
    `,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.    
    `
},
RC:{
desc:`
Put the product into your body, remote control the vibration functions.
Also can directly use the vibrator alone for clitoris without remote.

8 vibration modes, 1 vibration intensity.
Can choose the 8-autp cycle mode.
`,    
    charge:`
    For The Product:
A.  Take out the vibrator from the silicone sleeve.
B.  Turn back the vibrator cover and pull it out.
C.  Gently insert the USB charger into the Recharging hole (see picture).
D.  While under charge, the light indicator will be flashing (see picture).
E.  Once fully recharged, the light indication will stay on.

*   Please fully charge it before first use.
*   1.5  hours of charging = 1.5 hours of usage
*   For keeping the battery life, each 3 month charge it once even you don’t use it.
    For The Remote:
•   Remote use CR1220 button battery. 
•   Remote control distance: within 15 meter.    
•   Remote no waterproof.
    `,
    button:`
     Use The Product:
     Put the whole product into your body, remote control the vibration functions.
•    First you need to press the button on the bullet for 1.5 seconds till you feel one time shortly 
     vibration to turn on the remote reception function and same time the light on the bullet will 
     stay on.
•    After turn on the remote reception function, you can use the remote to control the K-Balls 
     function, you also can directly use the bullet alone for clitoris without remote.
     The operation of the vibrator button is same as the remote button.

A.  Just quickly press the remote button once to turn on the bullet Vibrator.
     Once switched on, it starts on the first mode.
B.  After turned on, you can choose 8 different modes.
     each quickly press changes one mode. after the 8th mode, 
     the vibration will go back to the 1st mode.
C.  After turned on, anytime can choose the 8-auto cycle mode.
     Just quickly press the button twice, the vibration mode will changes to the 8-auto cycle mode.
     To get out the 8-auto cycle mode, just quickly press the button once.
D.  For switch off the vibration of the bullet vibrator, just press the button for one second.
•    If you want to use the product for next time, you need to switch off the remote reception 
     function for saving the vibrator battery, so press the button for 2 seconds till you feel two 
     times shortly vibration and same time the light on the bullet will be turned off.
`
},
RHT:{ 
desc:`
With 43 degree heating function
Remote also is USB rechargeable

8 vibration modes, each mode has 3 vibration intensities.

1.5 hours of charging = 1.5 hours usage
`,       
    charge:`
For The Product:
A.  Gently insert the USB charger into the Recharging hole (see picture).
B.  While under charge, the light indicator (Big “M” Bullet) will be flashing.
C.  Once fully recharged, the light indicator (Big “M” Bullet) will stay on.
    
*    Please fully charge it before first use.
*    1.5  hours of charging = 1.5 hours of usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.

For The Remote:
A.  Gently insert the USB charger into the recharging hole (see picture).
B.  While under charge, the light indicator (Big “M” Bullet) will be flashing .
C.  Once fully recharged, the light indicator (Big “M” Bullet) will stay on.
•   Half  hour of charging = 2 month of usage
•   Remote control distance: within 15 meter.
•   Remote no waterproof.          
    `,
    button:`
•   The function of the big “M” button is exactly same as the small “M” button.
     Small “M” button for the small motor.
     Big “M” button for the big motor 
     Big “H” button for the heating function
•   First you need to press the big “M” button on the vibrator for 1.5 seconds till 
     you feel one time 
     shortly vibration to turn on the remote reception function and same time the big “M” button 
     will Lights up.
•   After turn on the remote reception function, you can use the remote to control the vibrator function.
•   After turn on the remote reception function, the operation of the vibrator button is same as the 
    remote button.
A.  Just quickly press the button once to turn it on.
    Once switched on, it starts on the first mode and weakest intensity.
B.  After turned on, you can choose 8 different modes, each quickly press changes one mode,
    after the 8th mode, the vibration will go back to the 1st mode.
C.  After turned on, you can choose 3 kinds of vibration intensity for any vibration mode.
    The first time quickly press the button twice, the vibration intensity will be upgraded to the 
    second strength. 
    The second time quickly press the button twice, the vibration intensity will be upgraded to the 
    third strength. 
    The third time quickly press the button twice, the vibration intensity will go back to the 
    weakest strength.
D.  Switch it off, just press the button for one second.
    If you want to use the product for next time, you need to switch off the remote reception 
    function for saving the vibrator battery, so press the button for 2 seconds till you feel two 
    times shortly vibration and same time of big “M” button will be turned off.
E.  For turn on the heating function, just quickly press the button “H” once.
F.  After switched on the heating function, the body of the vibrator will be warming up to 43
    degrees in 5 minutes.
G.  Switch the heating function off, just press the button “H” for one second.
•   If you want to use the product for next time, you need to switch off the remote reception 
    function for saving the product's battery, so press the button for 2 seconds till you feel two 
    times shortly vibration and same time the light of Big "M" Button will be turned off.
`
},
SR:{
desc:`
Two rings for penis and scrotum
Bottom bulgy ball with prolongs sex time.

10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1.5 hours usage
`,    
    charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.`
},
VA:{
desc:`
The bullet vibrate at the top of the penis directly.

10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1.5 hours usage
`,    
    charge:`
A.  Take out the vibrator from the TPE sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.


*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
     each quickly press changes one mode,after the 10th mode,  
     the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
     the vibration mode will changes to the 10-auto cycle mode.
     To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.
    `
},
ITS:{
desc:`
The body temperature will be 40 degrees after 5 minutes of turing it on.

8 vibration modes, each mode has 3 vibration intensities.

2.5 hours of charging = 2 hours usage
`,    
    charge:`
A.  Open the cover of the recharging hole.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
*    Please fully charge it before first use.
*    2.5 hours of charging = 2 hours of usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.`,
    button:`
A.  Just quickly press the button once to turn it on.
    Once switched on, it starts on the first mode and weakest intensity.
B.  After turned on, you can choose 8 different modes,
    each quickly press changes one mode, after the 8th mode, 
    the vibration will go back to the 1st mode.
C.  After turned on, you can choose 3 kinds of vibration intensity for any vibration mode.
    The first time quickly press the button twice, the vibration intensity will be upgraded to the
    second strength. 
    The second time quickly press the button twice, the vibration intensity will be upgraded  
    to the third strength. 
    The third time quickly press the button twice, the vibration intensity will go back to the 
     weakest strength.
D.  Switch it off, just press the button for one second.    
    `
},
DB:{
desc:
`
You can switch on the 2 Vibrator individually or both simultaneously.

8 vibration modes, 4 vibration intensity.
    
2 hour of charging = 1.5 hours usage
`,      
    charge:`
A.  Gently insert the USB charger into the recharging hole (see picture).
B.  While under charge, the light indicator (the silicone button) will be 
      flashing.
C.  Once fully recharged, the light indication (the silicone button) will stay on.


*    Please fully charge it before first use.
*    2  hours of charging = 1.5 hours of usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.`,
    button:`
A.  Press the button for half second to turn it on (Small or big button).
    Once switched on, it starts on the first mode and weakest intensity.
B.  After turned on, you can choose 8 different modes.
    each quickly press changes one mode, after the 8th mode, 
    the vibration will go back to the 1st mode.
C.  After turned on, you can choose 4 kinds of vibration intensity for any vibration mode.
    The first time quickly press the button twice, the vibration intensity will be upgraded to the
    second strength. 
    The second time quickly press the button twice, the vibration intensity will be upgraded to 
    the third strength. 
    The third time quickly press the button twice, the vibration intensity will be upgraded fourth
    strength.
    The fourth time quickly press the button twice, the vibration intensity will go back to the 
    weakest strength.
D.  Switch it off, just press the button for one second.
E.  The function of the small button is exactly same as the big button.
`
},
LB:{
    charge:`
A.  Turn back the vibrator cover and pull it out.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
    
    
*    Please fully charge it before first use.
*    1 hour of charging = 70 minuts usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 8 different modes.
    each quickly press changes one mode, after the 8th mode,
    the vibration will go back to the 1st mode.
C.  For choose the 8-auto cycle mode, just quickly press the button twice, 
    the vibration mode will changes to the 8-auto cycle mode.
    To get out the 8-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.    
`
},
RVKB:{
desc:`
Put the product into your body, remote control the vibration functions.
Also can directly use the vibrator alone for clitoris without remote.

8 vibration modes, 1 vibration intensity.
Can choose the 8-auto cycle mode.
`,    
    charge:`
    For The Product:
A.  Take out the vibrator from the silicone sleeve.
B.  Turn back the vibrator cover and pull it out.
C.  Gently insert the USB charger into the Recharging hole (see picture).
D.  While under charge, the light indicator will be flashing (see picture).
E.  Once fully recharged, the light indication will stay on.

*   Please fully charge it before first use.
*   1.5  hours of charging = 1.5 hours of usage
*   For keeping the battery life, each 3 month charge it once even you don’t use it.
    For The Remote:
•   Remote use CR1220 button battery. 
•   Remote control distance: within 15 meter.    
•   Remote no waterproof.
    `,
    button:`
    Use The Product:
Put the whole product into your body, remote control the vibration functions.
•    First you need to press the button on the bullet for 1.5 seconds till you feel one time shortly 
     vibration to turn on the remote reception function and same time the light on the bullet will 
     stay on.
•    After turn on the remote reception function, you can use the remote to control the K-Balls 
     function, you also can directly use the bullet alone for clitoris without remote.
     The operation of the vibrator button is same as the remote button.

A.  Just quickly press the remote button once to turn on the bullet Vibrator.
     Once switched on, it starts on the first mode.
B.  After turned on, you can choose 8 different modes.
     each quickly press changes one mode. after the 8th mode, 
     the vibration will go back to the 1st mode.
C.  After turned on, anytime can choose the 8-auto cycle mode.
     Just quickly press the button twice, the vibration mode will changes to the 8-auto cycle mode.
     To get out the 8-auto cycle mode, just quickly press the button once.
D.  For switch off the vibration of the bullet vibrator, just press the button for one second.
•    If you want to use the product for next time, you need to switch off the remote reception 
     function for saving the vibrator battery, so press the button for 2 seconds till you feel two 
     times shortly vibration and same time the light on the bullet will be turned off.
`
},
MR:{
desc:`
For bigger Size, can remove zinc alloy inner ring.
Bottom bulgy ball will prolongs sex time.

10 vibration modes, 1 vibration intensity.
Can choose the 10-auto cycle mode.

1 hour of charging = 1.5 hours usage
`,    
    charge:`
A.  Take out the vibrator from the silicone sleeve.
B.  Gently insert the USB charger into the recharging hole (see picture).
C.  While under charge, the light indicator will be flashing.
D.  Once fully recharged, the light indication will stay on.
    
    
*    Please fully charge it before first use.
*    1 hour of charging = 1.5 hours usage
*    For keeping the battery life, each 3 month charge it once even you don’t use it.
`,
    button:`
A.  Just quickly press the button once to turn it on.
B.  After turned on, you can choose 10 different modes,
    each quickly press changes one mode,after the 10th mode,  
    the vibration will go back to the 1st mode.
C.  For choose the 10-auto cycle mode, just quickly press the button twice, 
    the vibration mode will changes to the 10-auto cycle mode.
    To get out the 10-auto cycle mode, just quickly press the button once.
D.  Switch it off, just press the button for one second.
`
},

}

