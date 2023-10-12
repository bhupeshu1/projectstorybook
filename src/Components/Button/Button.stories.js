import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
    title:'Form/Button',
    components:Button,
    decorators:[
        (Story)=>
        (
        <div style={{width:"100%",height:"100vh" ,display:"flex",alignItems:"center"}}>
         <Story/>
            </div>
        ),
    ],
}

export const Primary = ()=> <Center><Button variant='primary'>Primary</Button></Center>
export const Secondary = ()=><Button variant='secondary'>Secondary</Button>
export const Danger  = () =><Button variant='danger'>Danger</Button>
export const Outline = () =><Button variant='outline'>Outline</Button>

const Template = args =><Button {...args}/>

export const PrimaryA = Template.bind({})
PrimaryA.args={
    variant:'Primary',
    children:'Primary args',
    

}


