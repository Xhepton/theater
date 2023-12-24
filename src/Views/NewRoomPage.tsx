import { NavigateFunction, useNavigate } from "react-router-dom";
import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout";
import { InputForm } from "../components/InputForm";
import { CreateMovieDTO, GetMovieDTO, MovieController } from "../controller/api/MovieController";
import { positionDropdownItems, genreDropdownItems } from "../controller/enums";
import { UserController } from "../controller/api/UserController";
import React, {useState} from "react";
import {RoomController} from "../controller/api/RoomController";
interface NewRoomInterface {
    userID: number
}

interface RoomData {
    roomName: string,
    rowCount: number,
    colCount: number
}

async function onSubmit(data: RoomData, navigate: NavigateFunction) {
    if (data.roomName === undefined) {
        alert("Please fill in the Room Name field")
        return
    } else if (data.rowCount === undefined) {
        alert("Please fill in the Row Count field")
        return
    } else if (data.colCount === undefined) {
        alert("Please fill in the Column Count field")
        return
    }

    var room = await RoomController.createNewRoom({
        roomName: data.roomName,
        rowCount: data.rowCount,
        colCount: data.colCount
    })

    if (room.error !== undefined) {
        alert(room.message)
        return
    }

    navigate("/room/" + room.roomName)
}

export function NewRoomPage() {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <InputForm submitButtonText="Hozzáad" title="Új Terem" inputFormElements={
                [
                    {
                        title: "Terem Neve",
                        inputType: "text",
                        id: "roomName",
                    },
                    {
                        title: "Terem Sorainak Száma",
                        inputType: "number",
                        id: "rowCount",
                    },
                    {
                        title: "Terem Oszlopainak Száma",
                        inputType: "number",
                        id: "colCount",
                    }
                ]
            } onSubmit={(values) => onSubmit(values as RoomData, navigate)}>
            </InputForm>
        </CustomerPageLayout>
    )
}