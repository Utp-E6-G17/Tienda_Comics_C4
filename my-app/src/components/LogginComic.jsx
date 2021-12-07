import React, {  useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { mensajeError } from '../utils/funciones';
import { toast } from 'react-toastify';

const LogginComic = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(()=>{
    localStorage.setItem('usuario','')

  },[])
  const onSubmit = async (data) => {
    //history.push('/Inicio');
    localStorage.setItem('usuario',data.email)
    const response = await axios.post(
      'http://127.0.0.1:2021/api/autenticar',
      data
    );
    console.log('Esta es la respuesta del servidor: ', response);
    if (response.status === 200) {
      toast('Bienvenido usuario', {
        type: 'success',
        autoClose: 3500,
      });
      history.push('/');
    }
  };

  return (
    <div className='login'>
      <h1>Comic Store</h1>

      <h2>Ingresar</h2>
      
      <br />

      <img src='https://static.vix.com/es/sites/default/files/styles/1x1/public/btg/batman-reading-comics.jpg' width='180' height='180' alt='thor' />

      <br />
      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Email</h4>
        <input
          {...register('email', {
            required: true,
          })}
          type='email'
        />

        {errors.email && mensajeError()}

        <br />
        <br />

        <h4>Contraseña</h4>
        <input
          {...register('password', {
            required: true,
          })}
          type='password'
        />

        {errors.password && mensajeError()}

        <br />
        <br />
        <button type='submit' className='btn btn-primary inline-block'>
          Ingresar
        </button>

        <br />
      </form>

      <span>¿No tienes una cuenta? Registrate:</span>
      <br />
      <button
        type='button'
        className='btn btn-primary inline-block'
        onClick={() => {
          history.push('/RegistroComic');
        }}
      >
        Registrarse
      </button>
    </div>
  );
};

export default LogginComic;
