import {CreatePortfolio} from "./create-portfolio/CreatePortfolio.tsx";
import {useState} from "react";
import {IInfoPortfolio} from "./dataForm.ts";
import {portfolio} from "../../data/data.ts";

export const FormPerson = () => {

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
            <CreatePortfolio infoPortfolio={infoPortfolio} setInfoPortfolio={setInfoPortfolio}
                             listPortfolio={listPortfolio} setListPortfolio={setListPortfolio}/>
        </>
    )
};

