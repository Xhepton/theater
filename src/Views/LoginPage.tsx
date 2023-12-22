import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";
import { GetUserDto, UserController } from "../controller/api/UserController";
import { getCurrentUser, setCurrentUser } from "../controller/session/session";
import React from "react";

async function onSubmit(values: any, navigate: NavigateFunction) {
    if (values.password == undefined || values.email == undefined) {
        alert("Please fill in every field")
        return
    }
    var data: any = await UserController.signInUser(values)
    if (data.error != undefined) {
        alert(data.message)
        return
    }
    if (data) {
        setCurrentUser(data)
        navigate("/movies")
        return
    }
    alert("Bad password!")
}

export function LoginPage() {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos weboldal"}>
            <InputForm title="Bejelentkezés" submitButtonText="Belépés" onSubmit={(value) => onSubmit(value, navigate)} inputFormElements={
                [
                    {
                        title: "E-mail cím",
                        id: "email",
                        inputType: "text"
                    },
                    {
                        title: "Jelszó",
                        id: "password",
                        inputType: "password"
                    }
                ]
            }>
                <a>Nincs még fiókod? Legyél átlagos! <Link to={"/register"}>Regisztrálj!</Link></a>
            </InputForm>
        </PageLayout>
    )
}