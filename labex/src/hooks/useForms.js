import { useState } from "react";

export function useForm(inicialState) {

    const [form, setForm] = useState(inicialState)

    const onChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const clear = () => {
        setForm(inicialState)
    }

    return [form, onChange, clear];
}