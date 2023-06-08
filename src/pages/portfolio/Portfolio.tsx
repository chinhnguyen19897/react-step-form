import {CreatePortfolio} from "./create-portfolio/CreatePortfolio.tsx";
import {ListPortfolio} from "./list-portfolio/ListPortfolio.tsx";
import {useState} from "react";
import {IInfoPortfolio} from "./dataForm.ts";
import {portfolio} from "../../data/data.ts";

export const Portfolio = () => {
    //bad
    // const [fullName, setFullname] = useState('')
    // const [phoneNumber, setPhoneNumber] = useState('')
    // const [email, setEmail] = useState('')
    // const [description, setDescripton] = useState('')



    //good
    const [infoPortfolio, setInfoPortfolio] = useState<IInfoPortfolio>({
        id: null,
        fullName: '',
        phoneNumber: '',
        email: '',
        description: '',
    })
    const [listPortfolio, setListPortfolio] = useState<IInfoPortfolio[]>(portfolio)

    return (
        <>
            <CreatePortfolio infoPortfolio={infoPortfolio} setInfoPortfolio={setInfoPortfolio} listPortfolio={listPortfolio} setListPortfolio={setListPortfolio}/>
            <ListPortfolio listPortfolio={listPortfolio}/>
        </>
    )
};

