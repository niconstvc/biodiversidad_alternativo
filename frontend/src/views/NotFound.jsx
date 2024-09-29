import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/style/notfound.css'; 

const NotFound = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize the navigation hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar la lógica de registro/inicio de sesión (por ejemplo, hacer una llamada a la API)
        if (isLogin) {
            console.log('Inicio de sesión exitoso:', { username, password });
            // Navigate to Dashboard after successful login
            navigate('/views/dashboard'); // Adjust the path if needed
        } else {
            console.log('Registro exitoso:', { username, password });
            // Navigate to Dashboard after successful registration
            navigate('/views/dashboard'); // Adjust the path if needed
        }
    };

    return (
        <main className="not-found">
            <div className="auth">
                <h2>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">{isLogin ? 'Iniciar Sesión' : 'Registrar'}</button>
                </form>
                <p>
                    {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
                    <button onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? 'Registrarse' : 'Iniciar Sesión'}
                    </button>
                </p>
            </div>

            <Link to="/" className="btn btn-primary">Volver a Home</Link>
        </main>
    );
};

export default NotFound;
