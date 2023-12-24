import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { InputForm } from "../components/InputForm";
import { PageLayout } from "../components/PageLayout";
import { CreateUserDTO, UserController } from "../controller/api/UserController";
import { setCurrentUser } from "../controller/session/session";
import React from "react";

async function onSubmit(values: any, navigate: NavigateFunction) {
    // values.user_role = "USER"
    if (values.email === undefined ||
        values.password === undefined ||
        values.password2 === undefined ||
        values.lastName === undefined ||
        values.firstName === undefined
    ) {
        alert("Please fill all the fields!")
        return
    }
    if (values.password != values.password2) {
        alert("The passwords do not match!")
        return
    }

    const createUserDTO: CreateUserDTO = {
        lastName: values.lastName,
        firstName: values.firstName,
        email: values.email,
        password: values.password,
    };

    console.log(values)
    console.log(values.type)
    var data: any = await UserController.createNewUser(createUserDTO)
    if (data.error != undefined) {
        alert(data.message)
        return
    }
    setCurrentUser(data, data.myToken)
    navigate("/movies")
}

export function RegistrationPage() {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos weboldal"}>
            <InputForm submitButtonText="Regisztrálj" title="Regisztráció" onSubmit={(values) => onSubmit(values as CreateUserDTO, navigate)} inputFormElements={
                [
                    {
                        title: "Családnév",
                        id: "lastName",
                        inputType: "text"
                    },
                    {
                        title: "Utónév",
                        id: "firstName",
                        inputType: "text"
                    },
                    {
                        title: "E-mail cím",
                        id: "email",
                        inputType: "e-mail"
                    },
                    {
                        title: "Jelszó",
                        id: "password",
                        inputType: "password"
                    },
                    {
                        title: "Jelszó mégegyszer",
                        id: "password2",
                        inputType: "password"
                    }
                ]
            }>
                <a>Van már átlagos fiókod? <Link to={"/login"}>Jelentkezz be!</Link></a>
            </InputForm>
        </PageLayout>
    ) // API_CALL: register new user
}