import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Paragraph, Strong, ContactWrapper } from "../components/ui/Typography"


export default function ShowPerson({name, id, contacts, expanded}) {
    return (
        <div>
            <Paragraph><Strong>{name}</Strong></Paragraph>
            <Paragraph><Strong>ID: {id}</Strong></Paragraph>
            {expanded  
             ?  <Fragment>
                <Strong>Contatos: </Strong>
                {contacts.map(contact => (
                    <ContactWrapper>
                        <Paragraph>
                            <Strong>Tipo: </Strong>{contact.type}
                        </Paragraph>
                        <Paragraph>
                            <Strong>Valor: </Strong>{contact.value}
                        </Paragraph>
                    </ContactWrapper>
            ))}
            </Fragment>
            :   <Paragraph>
                    <Link to={`/person/${id}/details`}>Ver detalhes</Link>
                </Paragraph>
            }
        </div>

    )
}

