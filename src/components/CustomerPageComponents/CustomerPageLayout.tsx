import { NavigateFunction, useNavigate } from "react-router-dom";
import { NavigationBar } from "../NavigationBar";
import { PageLayout } from "../PageLayout";
import { clearCurrentUser, setCurrentUser } from "../../controller/session/session";
import React from "react";

function logout(navigate: NavigateFunction) {}

export function CustomerPageLayout(props: React.PropsWithChildren<{}>) {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos weboldal"}>
            <NavigationBar elements={
                [
                    {
                        title: "Filmek",
                        id: "movies",
                        onPressed: (id) => navigate("/movies")
                    },
                    {
                        title: "Termek",
                        id: "rooms",
                        onPressed: (id) => navigate("/rooms")
                    },
                    {
                        title: "Fiók",
                        id: "profile",
                        onPressed: (id) => navigate("/user")
                    },
                    {
                        title: "Kilép",
                        id: "logout",
                        onPressed: (id) => { navigate("/"); clearCurrentUser() }
                    }
                ]
            } />
            {props.children}
        </PageLayout>
    )
}