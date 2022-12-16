import React, { useState } from 'react';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { EffectLeft } from '../Effects/Effects'
import { TextPage } from '../TextPage/TextPage'
import { ContainerContato, Form, ContentContato, MsgEmail } from './style';
import axios from 'axios';

const schema = yup.object({
    nome: yup.string().required('Digite seu nome.'),
    email: yup.string().required('Digite seu E-mail.').email('E-mail invalido'),
    assunto: yup.string().required('Campo vazio').min(3, 'Mínimo 3 Caracteres ')
}).required();


export function Contato() {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })
    const [emaill, setEmail] = useState(false)
    const [msgEmail, setMsgEmail] = useState('Mensagem enviada com sucesso')

    function sendEmail({ assunto, email, nome }) {

        axios.defaults.headers.post['Content-Type'] = 'application/json'
        axios.post('https://formsubmit.co/ajax/guilherme-developer@outlook.com', {
            Nome: nome,
            email: email,
            mensagem: assunto

        }).then(response => {
            if (response.status === 200) {
                setEmail(!emaill)

            }
        }).catch(error => {
            setMsgEmail('Mensagem não foi enviado por alguma falha técnica.')
        })
    }


    return (
        <ContainerContato id='Contato'>
            <EffectLeft>
                <ContentContato>

                    <TextPage namePage='Contato' />



                    <div>

                        <Form onSubmit={handleSubmit(sendEmail)}  >
                            <h5>Entre em contato</h5>
                            <div>
                                <input
                                    {...register('nome')}
                                    type="text"
                                    placeholder='Nome'
                                    className={errors.nome?.message ? 'erro' : ''}
                                    autoComplete='off'
                                />
                            </div>
                            <p>{errors.nome?.message}</p>
                            <div>
                                <input
                                    {...register('email')}
                                    type="text"
                                    placeholder='E-mail'
                                    className={errors.email?.message ? 'erro' : ''}
                                    autoComplete='off'
                                />
                            </div>
                            <p>{errors.email?.message}</p>
                            <div>
                                <textarea
                                    {...register('assunto')}
                                    id="" cols="22"
                                    rows="5"
                                    placeholder='Assunto'
                                    className={errors.assunto?.message ? 'erro' : ''}
                                />
                            </div>
                            <p>{errors.assunto?.message}</p>
                            <div>
                                <input
                                    type="submit"
                                    value="Enviar"
                                />
                            </div>



                        </Form>

                    </div>


                </ContentContato >
            </EffectLeft >
            {
                emaill &&
                < MsgEmail >
                    <span onClick={() => { setEmail(!emaill) }}>X</span>
                    {msgEmail}
                </MsgEmail>
            }
        </ContainerContato >
    );
}

