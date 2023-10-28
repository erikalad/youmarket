/** @format */

import React from "react";
import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { agregarUsuario } from "../redux/actions";

export default function FormUsuario() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);

  const onFinish = (values) => {
    const icono = values.nombre.slice(0, 2).toUpperCase();
    dispatch(agregarUsuario({ ...values, icono }));
    form.resetFields();
  };

  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={{
        layout: "vertical",
      }}
      style={{
        maxWidth: 600,
      }}
      onFinish={onFinish}>
      <Form.Item
        label="Nombre Empleado"
        name="nombre"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el nombre del empleado",
          },
        ]}>
        <Input placeholder="Cuenta1" />
      </Form.Item>
      <Form.Item
        label="Correo Electrónico"
        name="email"
        rules={[
          {
            required: true,
            message: "Por favor ingresa el correo electrónico del empleado",
          },
          { type: "email", message: "Ingresa un correo electrónico válido" },
        ]}>
        <Input placeholder="cuenta1@test.com.ar" />
      </Form.Item>
      <Form.Item name="icono" style={{ display: "none" }}>
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        {loading ? "Cargar" : "Carga exitosa"}
      </Button>
    </Form>
  );
}
