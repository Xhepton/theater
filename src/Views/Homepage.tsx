import { Link, useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { Button } from "react-bootstrap";
import React from "react";

export function Homepage() {
    var navigate = useNavigate()
    return (
        <PageLayout title={"Egy átlagos weboldal"}>
            <h1 className="homePageHeader">
                Üdvözöllek!
            </h1>
            <Button variant="primary" className="homepageButton" size="lg" onClick={() => navigate("/login")}>
                Bejelentkezés
            </Button>

        </PageLayout>
    )
}