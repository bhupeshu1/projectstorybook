import React from "react";
import Input from './Input'

export default {
    title:'Form/Input',
    components:Input
}

export const Medium =()=><input size='medium' type='number'></input>

const Template = args => <Input {...args}/>

export const firstInput = Template.bind({})

firstInput.args={
    placeholder:"text input",
    type:"number",
    borderRadius:"20px"

}

