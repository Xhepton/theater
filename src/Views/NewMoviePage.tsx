import { NavigateFunction, useNavigate } from "react-router-dom";
import { CustomerPageLayout } from "../components/CustomerPageComponents/CustomerPageLayout";
import { InputForm } from "../components/InputForm";
import { CreateMovieDTO, GetMovieDTO, MovieController } from "../controller/api/MovieController";
import { positionDropdownItems, genreDropdownItems } from "../controller/enums";
import { UserController } from "../controller/api/UserController";
import React from "react";
interface NewMovieInterface {
    userID: number
}

interface MovieData {
    title: string,
    genre: string,
    runtime: number
}

async function onSubmit(data: MovieData, navigate: NavigateFunction) {
    var movie = await MovieController.createNewMovie({
        title: data.title,
        genre: data.genre,
        runtime: data.runtime
    })
    if (movie.error !== undefined) {
        alert(movie.message)
        return
    }
    // setCurrentUser(await UserController.getUserById(getCurrentUser().user_id.toString()))
    navigate("/movie/" + movie.title)
}

export function NewMoviePage() {
    var navigate = useNavigate()
    return (
        <CustomerPageLayout>
            <InputForm submitButtonText="Hozzáad" title="Új film" inputFormElements={
                [
                    {
                        title: "Film Címe",
                        inputType: "text",
                        id: "title",
                    },
                    {
                        title: "Film Műfaja",
                        inputType: "dropdown",
                        id: "genre",
                        dropDownElements: genreDropdownItems
                    },
                    {
                        title: "Film Hossza Percben",
                        inputType: "number",
                        id: "placeOfProblem",
                    }
                ]
            } onSubmit={(values) => onSubmit(values as MovieData, navigate)}>
            </InputForm>
        </CustomerPageLayout>
    )
}