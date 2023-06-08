import {CardStyled} from "../../../components/ui/CardStyled.tsx";
import {IInfoPortfolio} from "../dataForm.ts";
import React from "react";
import {FormItem, FormWrapper} from "../../../components/ui/FormStyled.tsx";

//bad
// type Props1 = {
//     infoPortfolio: IInfoPortfolio,
//     listPortfolio: IListInfoPortfolio[],
//     setInfoPortfolio: any,
//     setListPortfolio: any,
// }

//good
type Props = {
    infoPortfolio: IInfoPortfolio,
    listPortfolio: IInfoPortfolio[],
    setInfoPortfolio: (data: IInfoPortfolio) => void
    setListPortfolio: React.Dispatch<React.SetStateAction<IInfoPortfolio[]>>
}

export const CreatePortfolio: React.FC<Props> = ({
                                                     infoPortfolio,
                                                     listPortfolio,
                                                     setInfoPortfolio,
                                                     setListPortfolio
                                                 }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setInfoPortfolio(
            {
                ...infoPortfolio,
                id: listPortfolio.length + 1,
                [name]: value,
            });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(infoPortfolio).every(item => item === null || item === '')) return;
        setListPortfolio([...listPortfolio, infoPortfolio])
        setInfoPortfolio(
            {
                ...infoPortfolio,
                id: null,
                fullName: '',
                phoneNumber: '',
                email: '',
                description: '',
            });
    }

    return (
        <>
            <CardStyled>
                <FormWrapper onSubmit={handleSubmit}>
                    <FormItem>
                        <label htmlFor="fullName">Full Name:</label>
                        <input type="text" name="fullName" value={infoPortfolio.fullName} onChange={handleChange}/>
                    </FormItem>
                    <FormItem>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" value={infoPortfolio.email} onChange={handleChange}/>
                    </FormItem>
                    <FormItem>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input type="number" name="phoneNumber" value={infoPortfolio.phoneNumber}
                               onChange={handleChange}/>
                    </FormItem>
                    <FormItem>
                        <label htmlFor="description">Description:</label>
                        <input type="text" name="description" value={infoPortfolio.description}
                               onChange={handleChange}/>
                    </FormItem>
                    <FormItem>
                        <button type="submit">Submit</button>
                    </FormItem>
                </FormWrapper>
            </CardStyled>
        </>
    );
}