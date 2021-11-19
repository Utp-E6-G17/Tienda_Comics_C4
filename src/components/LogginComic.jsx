import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputLabel } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { mensajeError } from "../utils/funciones";

const LogginComic = () => {
	const history = useHistory();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const response = await axios
			.post("http://localhost:3000/authenticate", data)
			.catch((error) => {
				console.log("Ocurrio un error en el login: ", error);
			});
		console.log("Esta es la respuesta del servidor: ", response);
	};

	return (
		<div className="login">
			<h1>Comic Store</h1>

			<h2>Ingresar</h2>

			<br />

			<form onSubmit={handleSubmit(onSubmit)}>
				<InputLabel>Email</InputLabel>
				<input
					{...register("email", {
						required: true,
					})}
					type="email"
				/>

				{errors.email && mensajeError()}

				<br />
				<br />

				<InputLabel>Contraseña</InputLabel>
				<input
					{...register("password", {
						required: true,
					})}
					type="password"
				/>

				{errors.password && mensajeError()}

				<br />
				<br />
				<button type="submit" className="btn btn-primary inline-block">
					Ingresar
				</button>

				<br />
			</form>

			<span>¿No tienes una cuenta? Registrate:</span>
			<br />
			<button
				type="button"
				className="btn btn-primary inline-block"
				onClick={() => {
					history.push("/RegistroComic");
				}}
			>
				Registrarse
			</button>
		</div>
	);
};

export default LogginComic;
