import {IInfoPortfolio} from "../dataForm.ts";
import React from "react";
import {CardStyled} from "../../../components/CardStyled.tsx";


type Props = {
    listPortfolio: IInfoPortfolio[]
}
export const ListPortfolio: React.FC<Props> = ({listPortfolio}) => {
    return (
        <>
            {
                listPortfolio.map(item => {
                    const {id, fullName, phoneNumber, email, description} = item
                    return (
                        <CardStyled key={id}>
                            <article>
                                <h2>{fullName}</h2>
                                <p>{email}</p>
                                <p>{phoneNumber}</p>
                                <p>{description}</p>
                            </article>
                        </CardStyled>
                    )
                })
            }
        </>
    )
}
