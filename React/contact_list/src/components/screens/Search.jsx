import React, { Fragment, useEffect, useState } from "react";
import { InputText } from "../ui/form/form";
import { Title } from "../ui/Typography"

function Search() {
    const persons = useSelector(state => state)
    const [search, setSearch] = useState('')
    const [filteredPersons, setFilteredPersons] = useState([])
    useEffect(() => {
        setFilteredPersons(persons.filter(p => p.name.toLowerCase().includes(search.toLocaleLowerCase())))
    }, [search])
    return (
        <Fragment>
            <Title>Busca</Title>
            <InputText value={search} onChange={e => setSearch(e.target.value)} />
        </Fragment>
    )
}

export { Search }