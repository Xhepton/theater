import React from "react"
import Button from "react-bootstrap/esm/Button"

interface ItemListInterface {
    onClick: (id: string) => void,
    IDs: string[]
}

export function ItemList(props: React.PropsWithChildren<ItemListInterface>) {
    return (
        <>
            {
                props.IDs.map(
                    (id: string) => (
                        <Button className="itemListItemButton" variant="secondary" onClick={() => props.onClick(id)}>{id}</Button>
                    )
                )
            }
            {props.children}
        </>
    )
}