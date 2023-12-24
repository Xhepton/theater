import React, { Children, useRef } from "react";
import "./InputForm.css"
import { MyDropdownButton, MyDropdownButtonElementInterface } from "./MyDropdownButton";
import { Button } from "react-bootstrap";

interface InputFormDataProps {
    title: string,
    inputType: string,
    id: string,
    initalValue?: any,
    dropDownElements?: MyDropdownButtonElementInterface[]
}

interface InputFormProps {
    title: string,
    inputFormElements: InputFormDataProps[]
    submitButtonText: string,
    onSubmit: (values: Object) => any
}

export function InputForm(props: React.PropsWithChildren<InputFormProps>) {
    const data: { [key: string]: any } = {};
    return (
        <div className="input_form_label_body">
        <h1 className="input_form_title">{props.title}</h1>
    {
        props.inputFormElements.map(
            function (value: InputFormDataProps) {
                return (
                    <InputFormElement initialValue={value.initalValue}
                                      id={value.id}
                                      onKeyDown={(val: any) => { data[value.id] = val }}
                                      inputType={value.inputType}
                                      title={value.title}
                                      dropDownElements={value.dropDownElements} />
                    )
            }
        )
    }
    {props.children}
    <Button className="input_form_submit_button" size="lg" onClick={() => { props.onSubmit(data) }}> {props.submitButtonText} </Button>
    </div>
)
}

interface InputFormElementProps {
    title: string,
    inputType: string,
    onKeyDown: (value: any) => any;
    id: string,
    initialValue?: any,
    dropDownElements?: MyDropdownButtonElementInterface[]
}

function InputFormElement(props: React.PropsWithChildren<InputFormElementProps>) {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    if (props.inputType === "dropdown") {
        return (
            <div className="inpt_form_body">
            <p className="input_form_label">{props.title}</p>
                <MyDropdownButton id={props.id} onClick={props.onKeyDown} listOfElements={props.dropDownElements} />
        </div>
    )
    }
    if (props.inputType === "textarea") {
        return (
            <div className="inpt_form_body">
            <p className="input_form_label">{props.title}</p>
                <textarea className="input_form_textarea" rows={10} onChange={(value: any) => props.onKeyDown(textAreaRef.current?.value)} ref={textAreaRef} />
        </div>
    )
    }
    return (
        <div className="input_form_body">
        <p className="input_form_label">{props.title}</p>
            <input className="input_form_input" onChange={(value: any) => props.onKeyDown(inputRef.current?.value)} type={props.inputType} name="name" ref={inputRef} />
    </div>
)
}