import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"
import { Button } from "react-bootstrap"
import React from "react";

interface RoomsPageInterface {
    IDs: string[]
}

function onItemClick(id: string, navigate: NavigateFunction) {
    navigate("/room/" + id)
}

function onClick(navigate: NavigateFunction) {
    navigate("/createRoom")
}

export function RoomsPage(props: RoomsPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <h1>Termek</h1>
            <ItemList IDs={props.IDs.map((id) => id.toString())}
                      onClick={(id) => onItemClick(id, navigate)} />
            <br />
            <Button className="roomsButton" size="lg" onClick={() => onClick(navigate)}>
                Új Terem Létrehozása
            </Button>
        </CustomerPageLayout>
    )
}