import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"
import { MovieController } from "../controller/api/MovieController"
import React from "react";
import {RoomController} from "../controller/api/RoomController";
import {Button} from "react-bootstrap";
import {NavigateFunction, useNavigate} from "react-router-dom";

interface RoomPageInterface {
    roomData: RoomData,
}

interface RoomData {
    roomName: string,
    rowCount: number,
    colCount: number
}

async function onChange(value: any, roomId: string) {
    await RoomController.modifyRoom(roomId, {
        rowCount: value.rowCount,
        colCount: value.colCount
    })
    window.location.reload();
}

async function onDelete(roomId: string, navigate: NavigateFunction) {
    await RoomController.deleteRoomById(roomId)
    navigate("/rooms")
}

export function RoomPage(props: RoomPageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Terem adatainak szerkesztése" onChange={(obj: any) => { onChange(obj, props.roomData.roomName); }} onDelete={(value: any) => {onDelete(props.roomData.roomName, navigate)}} parameters={[
                {
                    id: "roomName",
                    title: "Terem neve:  ",
                    inputType: "text",
                    isChangable: false,
                    value: props.roomData.roomName,

                }, {
                    id: "rowCount",
                    title: "Terem sorainak száma:  ",
                    inputType: "number",
                    isChangable: true,
                    value: props.roomData.rowCount,

                }, {
                    id: "colCount",
                    title: "Terem oszlopainak száma:  ",
                    inputType: "number",
                    isChangable: true,
                    value: props.roomData.colCount,

                }
            ]} />
            <Button className="ObjectDeleterButton" size="lg" onClick={() => onDelete(props.roomData.roomName, navigate)}>
                Törlés
            </Button>
        </CustomerPageLayout>
    )
}