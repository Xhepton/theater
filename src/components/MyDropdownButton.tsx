import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import "./MyDropdownButton.css"

interface MyDropdownButtonInterface {
    id: string,
    onClick: (id: string) => any,
    listOfElements?: MyDropdownButtonElementInterface[]
    initialValue?: any
}

export interface MyDropdownButtonElementInterface {
    id: string,
    title: string,
}

export function MyDropdownButton(props: MyDropdownButtonInterface) {
    var [label, setLabel] = React.useState(props.listOfElements?.at(0)?.title ?? "");
    return (
        <Dropdown>
            <Dropdown.Toggle size="lg" variant="success" id="dropdown-basic">
                {label}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {
                    props.listOfElements?.map((value) => (
                        <Dropdown.Item onClick={
                            () => {
                                setLabel(value.title);
                                props.onClick(value.id);
                            }
                        }>
                            {value.title}
                        </Dropdown.Item>))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}