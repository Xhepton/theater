import { JsxExpression } from "typescript"
import { MyDropdownButtonElementInterface } from "./MyDropdownButton"
import { useState } from "react"
import { InputForm } from "./InputForm"
import { Button } from "react-bootstrap"
import React from "react"

interface ObjectEditorInterface {
    title: string,
    parameters: ObjectEditorItemInterface[]
    onChange: (obj: any) => void
    onDelete: (value: any) => void
}

interface ObjectEditorItemInterface {
    id: string,
    title: string,
    inputType: string,
    isChangable: boolean,
    value: any
    valueConverter?: (object: any) => any
    dropDownElements?: MyDropdownButtonElementInterface[]
}

function handleDelete() {
    // Add your delete logic here
    // You can use props.onDelete or any other method to handle the delete action
    // For example: props.onDelete(props.itemId);
}

export function ObjectEditor(props: ObjectEditorInterface) {
    const [editing, setEditing] = useState(false)
    if (!editing) {
        return (
            <>
                <h1 className="ObjectEditorTitle">{props.title}</h1>
                {props.parameters.map((value => {
                    if (value.inputType === "textarea") {
                        return (
                            <div className="LargeObjectEditorItemBody">
                                <p className="LargeObjectEditorLargeItemTitle">{value.title}</p>
                                <p className="LargeObjectEditorLargeItemValue">{value.valueConverter?.(value.value) ?? value.value.toString()}</p>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div className="ObjectEditorItemBody">
                                <span className="ObjectEditorItemTitle">{value.title}</span>
                                <span className="ObjectEditorItemValue">{value.valueConverter?.(value.value) ?? value.value.toString()}</span>
                            </div>
                        )
                    }
                }))}
                <Button className="ObjecEditorButton" size="lg" onClick={() => setEditing(true)}>
                    Módosít
                </Button>
            </>
        )
    }
    else {
        return (

            <>

                <InputForm submitButtonText="Módosít" title={props.title} onSubmit={props.onChange} onDel={props.onDelete} inputFormElements={props.parameters.filter((parameter) => parameter.isChangable).map((parameter) => {
                return {
                    title: parameter.title,
                    inputType: parameter.inputType,
                    id: parameter.id,
                    dropDownElements: parameter.dropDownElements,
                    initalValue: parameter.value
                }
            })} />

                <Button className="ObjecEditorButton" size="lg" onClick={() => setEditing(false)}>Vissza</Button>

            </>
        )
    }

}