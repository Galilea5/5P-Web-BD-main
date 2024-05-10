import React, { useState, useEffect } from "react";
import Data from "./Data";
import Mymovielist from "../Mymovielist/Mymovielist";

const initialUsers = [
    { email: 'a22110055@ceti.mx', password: '22110055' },
    // Puedes agregar más usuarios aquí
];

function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [users, setUsers] = useState(initialUsers);

    // Cargar usuarios desde el almacenamiento local al inicio
    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers));
        }
    }, []);

    // Actualizar el almacenamiento local cuando se agregue un nuevo usuario
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleInputChange = (setState) => {
        return (event) => {
            setState(event.target.value);
        };
    };

    const handleLogin = () => {
        const foundUser = users.find(user => user.email === email && user.password === password);
        if (foundUser) {
            setIsLoggedIn(true);
        } else {
            alert("Correo electrónico o contraseña incorrectos");
        }
    };

    const handleRegister = () => {
        const newUser = { email, password };
        setUsers([...users, newUser]);
        alert("Usuario registrado correctamente");
        setEmail("");
        setPassword("");
    };

    return (
        <>
            {isLoggedIn ? (
                <Mymovielist/>
            ) : (
                <div className="card">
                    <h1 className="title">Iniciar Sesión</h1>
                    <form className="login">
                        <span className="inputContainer">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleInputChange(setEmail)}
                                className="input"
                            />
                        </span>
                        <span className="inputContainer">
                            <label htmlFor="password">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleInputChange(setPassword)}
                                className="input"
                            />
                        </span>
                        <button onClick={handleLogin} className="btn">Iniciar sesión</button>
                        <button onClick={handleRegister} className="btn">Registrarse</button>
                    </form>
                </div>
            )}
        </>
    );
}

export default Form;
