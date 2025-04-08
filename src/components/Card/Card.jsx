import React, { useState, useEffect } from 'react';
import api from '../../service/api';  // Importando o 'api' que você está utilizando
import './Card.css';  // Aqui você pode adicionar o CSS para o card

export default function Card() {
    const [chuck, setChuck] = useState(null);  // Inicializando como null
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Função para buscar uma nova piada com Axios
    const fetchPiada = async () => {
        setLoading(true);
        setError(null);  // Reseta o erro
        try {
            const response = await api.get('https://api.chucknorris.io/jokes/random'); 
            setChuck(response.data);  
        } catch (err) {
            setError('Ocorreu um erro ao buscar a piada.');
            console.error('Erro ao encontrar piada:', err);
        }
        setLoading(false);
    };

    // Carrega uma piada assim que o componente for montado
    useEffect(() => {
        fetchPiada();
    }, []);  // O useEffect será chamado apenas uma vez, logo após o componente ser montado

    return (
        <div className="card">
            <div className="card-content">
                {loading ? (
                    <p>Carregando...</p>
                ) : error ? (
                    <p className="error">{error}</p>
                ) : chuck ? (
                    <>
                        <p className="joke">{chuck.value}</p>  
                        {chuck.icon_url && (
                            <img
                                src={chuck.icon_url}
                                alt="Chuck Norris Icon"
                                className="url-imagem"
                            />
                        )}
                        <button className="btn" onClick={fetchPiada}>
                            Nova Piada
                        </button>
                    </>
                ) : (
                    <p>Ocorreu um erro ao carregar a piada.</p>  
                )}
            </div>
        </div>
    );
}
