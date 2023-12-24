import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout"
import { ObjectEditor } from "../components/ObjectEditor"
import { MovieController } from "../controller/api/MovieController"
import React from "react";
import {Button} from "react-bootstrap";
import {NavigateFunction, useNavigate} from "react-router-dom";

interface MoviePageInterface {
    movieData: MovieData,
}

interface MovieData {
    title: string,
    genre: string,
    runtime: number
}

async function onChange(value: any, movieId: string) {
    await MovieController.modifyMovie(movieId, {
        genre: value.genre,
        runtime: value.runtime
    })
    window.location.reload();
}

async function onDelete(movieId: string, navigate: NavigateFunction) {
    await MovieController.deleteMovieById(movieId)
    navigate("/movies")
}

export function MoviePage(props: MoviePageInterface) {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <ObjectEditor title="Film adatainak szerkesztése" onChange={(obj: any) => { onChange(obj, props.movieData.title); }} onDelete={(value: any) => {onDelete(props.movieData.title, navigate)}} parameters={[
                {
                    id: "title",
                    title: "Cím:  ",
                    inputType: "text",
                    isChangable: false,
                    value: props.movieData.title,

                }, {
                    id: "genre",
                    title: "Műfaj:  ",
                    inputType: "text",
                    isChangable: true,
                    value: props.movieData.genre,

                }, {
                    id: "runtime",
                    title: "Film hossza:  ",
                    inputType: "number",
                    isChangable: true,
                    value: props.movieData.runtime + " perc",

                }
            ]} />
            <Button className="ObjectDeleterButton" size="lg" onClick={() => onDelete(props.movieData.title, navigate)}>
                Törlés
            </Button>
        </CustomerPageLayout>
    )
}