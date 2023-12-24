import { Button } from "react-bootstrap"
import "./NavigationBar.css"
import React from "react";

interface NavigationBarElementInterface {
    title: string,
    id: string,
    onPressed: (id: string) => any
}

interface NavigationBarInterface {
    elements: NavigationBarElementInterface[]
}

export function NavigationBar(props: NavigationBarInterface) {
    return (
        <div className="NavigationBarBody">
            {
                props.elements.map(
                    (value) => (
                        <Button className="primaryButton" onClick={() => value.onPressed(value.id)}>
                            {value.title}
                        </Button>
                    )
                )
            }
        </div>
    )
}