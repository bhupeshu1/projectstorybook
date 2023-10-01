import React from "react";
import Button from "./Button";

export default {
    title:'Button',
    components:Button
}

export const Primary = ()=><Button variant='primary'>Primary</Button> 
export const Secondary = ()=><Button variant='secondary'>Secondary</Button>
export const Danger  = () =><Button variant='danger'>Danger</Button>
export const Outline = () =><Button variant='outline'>Outline</Button>
