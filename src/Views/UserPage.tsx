import { NavigateFunction, useNavigate } from "react-router-dom"
import { ObjectEditor } from "../components/ObjectEditor"
import { PatchUserDTO, UserController } from "../controller/api/UserController"
import { getCurrentUser, setCurrentUser } from "../controller/session/session"
import React from "react";
import {CustomerPageLayout} from "../components/CustomerPageComponents/CustomerPageLayout";

interface UserData {
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    userRole: string
}

interface UserPageInterface {
    userData: UserData
}

async function onChange(value: PatchUserDTO, navigate: NavigateFunction) {}

export function UserPage() {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <div>You are a User!</div>
        </CustomerPageLayout>
    )
}