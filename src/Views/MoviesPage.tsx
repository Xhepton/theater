import { NavigateFunction, useNavigate } from "react-router-dom"
import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout"
import { ItemList } from "../components/ItemList"
import { Button } from "react-bootstrap"
import React from "react";

interface MoviesPageInterface {
    IDs: string[]
}

function onItemClick(id: string, navigate: NavigateFunction) {
    navigate("/movie/" + id)
}

function onClick(navigate: NavigateFunction) {
    navigate("/createMovie")
}

export function MoviesPage(props: MoviesPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <h1>Filmek</h1>
            <ItemList IDs={props.IDs.map((id) => id.toString())}
                      onClick={(id) => onItemClick(id, navigate)} />
            <br />
            <Button className="moviesButton" size="lg" onClick={() => onClick(navigate)}>
                Új Film Létrehozása
            </Button>
        </CustomerPageLayout>
    )
}