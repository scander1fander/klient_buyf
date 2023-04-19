import React, { useState } from 'react'
import { Label, Form, FormGroup, Button, Input } from 'reactstrap'
import AuthService from '../services/Auth.service';
import '../index.css'
import Pattern_Dark2 from '../img/Pattern_Dark2.png';
const Registration = () => {
    // Создание переменных с хуком useState для отслеживания изменения полей ввода
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [username, setName] = useState('');
    // Создание переменных с хуком useState для отслеживания ввода данных( если ничего не ввели, то состояние менется)
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [nameInvalid, setNameInvalid] = useState(false);
    // Создаем функцию для регистрации
    const onRegistration = async () => {
        setEmailInvalid(false);
        setPasswordInvalid(false);
        setNameInvalid(false);
        // Обрабатывает ошибки не зпполеных полей. Если поля не заполнены состояние изменяются
        if (!password || !email || !username) {
            if (!password) setPasswordInvalid(true);
            if (!email) setPasswordInvalid(true);
            if (!username) setNameInvalid(true);
            alert("Ошибка ввода");
        }
        // Создаем запрос к серверу для регистрации с обработкой полученных данных
        await AuthService.register(username, email, password)
            .then((response) => {
                console.log(response.data)
                if (response.data.status != 200) {
                    console.log(response)
                    alert(response.data.message)
                } else {
                    alert(response.data.message)
                    setName("");
                    setEmail("");
                    setPassword("");
                }
            })
            .catch((err) => {
                alert(err.response.data.message)
            });
    }
    // Создаем несколько функций для считавания каждого изменений полей
    const handleOnChange = (event) => {
        setName(event.target.value)
    }
    const handleOnChange1 = (event) => {
        setEmail(event.target.value)
    }
    const handleOnChange2 = (event) => {
        setPassword(event.target.value)
    }
    return (
        <div style={{ backgroundImage: `url(${Pattern_Dark2})`, height: "100%", position: "fixed", top: 0, left: 0, width: "100%" }}>
            <div style={{ marginTop: "5%" }}>
                <Button variant="btn-light" href='/' style={{ backgroundColor: "#F0DAE1", color: "#9A1656", display: "block", border: "none", width: "8%", marginLeft:"19%"}}>Назад</Button>
                <p className='footerlogo' style={{ color: "#F0DAE1", margin: 0 }}>BUYF</p>
                <Form className="registration-form" style={{ backgroundColor: "#F0DAE1" }}>
                    <FormGroup style={{ paddingBottom: "2%" }}>
                        <Label style={{ fontSize: "20px", color: "#9A1656", fontWeight: "bold" }}>
                            Имя пользователя
                        </Label>
                        <Input
                            placeholder="Введите имя пользователя"
                            type='text'
                            value={username}
                            onChange={(event) => handleOnChange(event)}
                            invalid={nameInvalid}
                            style={{ width: "40%", margin: "auto" }}
                        />
                    </FormGroup >
                    <FormGroup style={{ textAlign: "center", paddingBottom: "2%" }}>
                        <Label style={{ fontSize: "20px", color: "#9A1656", fontWeight: "bold" }}>
                            Почта
                        </Label>
                        <Input
                            placeholder="Введите почту"
                            type='email'
                            value={email}
                            onChange={(event) => handleOnChange1(event)}
                            invalid={emailInvalid}
                            style={{ width: "40%", margin: "auto" }}
                        />
                    </FormGroup >
                    <FormGroup style={{ textAlign: "center" }}>
                        <Label for="examplePassword" style={{ fontSize: "20px", color: "#9A1656", fontWeight: "bold" }}>
                            Пароль
                        </Label>
                        <Input
                            placeholder="Введите пароль"
                            type='password'
                            value={password}
                            onChange={(event) => handleOnChange2(event)}
                            invalid={passwordInvalid}
                            style={{ width: "40%", margin: "auto" }}
                        />
                    </FormGroup>
                </Form>
                <Button variant="btn-light" onClick={onRegistration} style={{ backgroundColor: "#F0DAE1", color: "#9A1656", display: "block", margin: "0 auto", marginBottom: "2%", border: "none" }}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}
export default Registration