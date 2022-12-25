import React from 'react';
import { ContainerSocial, Sociais } from './styles';
import { IconContext } from 'react-icons';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"
import { RiContactsLine } from "react-icons/ri"
export function Social() {
    return (
        <ContainerSocial>
            <Sociais>
                <ul>
                    <IconContext.Provider value={{ size: '20px', style: { color: 'white' } }}>
                        <li>
                            <a href="https://github.com/GuilhermeDevv">

                                {<AiFillGithub />}

                            </a>
                        </li>
                        <li>
                            <a href="www.linkedin.com/in/guilhermeSantosDEVV">

                                {<AiFillLinkedin />}

                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=5521999132806" target="_blank">

                                {<BsWhatsapp />}
                            </a>
                        </li>
                        <li>
                            <a href="mailto:guilherme-developer@outlook.com?subject=Conversar&amp;body=Olá,%0D%0A%0D%0A[Assunto]%0D%0A%0D%0AAtenciosamente,%0D%0A[Nome da empresa].">

                                {<AiOutlineMail />}
                            </a>
                        </li>

                    </IconContext.Provider>
                </ul>
            </Sociais>
        </ContainerSocial >
    );
}

