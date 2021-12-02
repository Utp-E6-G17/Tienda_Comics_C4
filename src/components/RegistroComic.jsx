import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { mensajeError } from '../utils/funciones';
import { toast } from 'react-toastify';

const RegistroComic = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    history.push('/Inicio');
    const response = await axios.post('http://localhost:3000/register', data);
    console.log('Esta es la respuesta del servidor: ', response);
    if (response.status === 200) {
      toast('Se ha registrado correctamente', {
        type: 'success',
        autoClose: 3500,
      });
      // history.push('/Inicio');
    }
  };

  return (
    <div className='login'>
      <h1>Comic Store</h1>

      <h2>Registrarse</h2>

      <br />

      <form onSubmit={handleSubmit(onSubmit)}>
        <InputLabel>Email</InputLabel>
        <input
          {...register('email', {
            required: true,
          })}
          type='email'
        />

        {errors.email && mensajeError()}

        <br />
        <br />

        <InputLabel>Contraseña</InputLabel>
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
          Registrarse
        </button>

        <br />
      </form>

      <span>¿Ya tienes una cuenta? Ingresa:</span>
      <br />
      <button
        type='button'
        className='btn btn-primary inline-block'
        onClick={() => {
          history.push('/LogginComic');
        }}
      >
        Ingresar
      </button>
    </div>
  );
};

export default RegistroComic;
