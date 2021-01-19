import React, { useRef } from "react";
import Form from "../../../../../Components/Form";
import Input from "../../../../../Components/Input";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { Button } from "@material-ui/core";
import axios from "axios";
import useStyles from "./styles";
import getValidationErrors from "../../../../../Components/utils/getValidationErrors";
import { useCardContext } from "../CardContext";

function ContentStep2() {
    const classes = useStyles({});
    const formRef = useRef<FormHandles>(null);
    const { card, setCard } = useCardContext();
    const submitForm = async (formData) => new Promise(async (resolve) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required("Insira seu nome completo").max(30),
                number: Yup.number().required("Número de cartão inválido").max(16),
                securityCode: Yup.number().required("Código inválido").max(3),
                date: Yup.string().required("Data inválida").max(5),
            });
            await schema.validate(formData, {
                abortEarly: false,
            });

            // after validation
            // try {
            //     const res  =await axios.post("/",formData)
                
            // } catch (error) {
            //     formRef.current?.setErrors(getValidationErrors(error));
            // }

        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                formRef.current?.setErrors(getValidationErrors(err));
                return;
            }
        }
    });
    const onChanges = (formData) =>{
        setCard({...card,[formData.target.name]: formData.target.value});
    };
    return (
        <Form classname={classes.contentStep2} ref={formRef} handleChange={onChanges} handleSubmit={submitForm}>
            <Input name="number" label="Número do cartão" maxLength={16} type="text" />
            <Input name="name" label="Nome (igual ao cartão)" maxLength={20} type="text" />
            <div className={classes.wrapper}>
                <div className={classes.wrapperInputs}>
                    <Input name="date" label="Validade" maxLength={5} type="date" />
                </div>
                <div className={classes.wrapperInputs}>
                    <Input name="securityCode" label="CVV" maxLength={3} type="text" />
                </div>
            </div>
            <Button className={classes.btn} disableElevation variant="contained" size="large" color="primary" type="submit">Continuar</Button>
        </Form>
    );
    
}

export default ContentStep2;