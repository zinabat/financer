import React, { useState } from 'react';

export function useInput(name, defaultValue, validate) {
    const [value, setValue] = useState(defaultValue);
    const [error, setError] = useState(null);

    function handleChange(e) {
        setValue(e.target.value);
        setError(null);
    }

    function handleBlur(e) {
        handleValidate();
    }

    function handleValidate() {
        const valid = validate && validate(value);
        setError(!valid);
        return valid;
    }

    return {
        props: {
            name,
            value,
            onChange: handleChange,
            onBlur: handleBlur,
            error
        },
        validate: handleValidate
    };
}

export function useSubmit(inputs, success) {
    const [errorItems, setErrorItems] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();
        // run validate function on each input
        const errorItems = inputs.filter(input => !input.validate());
        setErrorItems(errorItems);
        if (errorItems && errorItems.length === 0) {
            // call success with array of {name, value} objects
            success && success(
                inputs.map( ({ props: { name, value } }) => ({
                    name,
                    value
                }))
            );
        }
    }

    return {
        props: {
            onSubmit: handleSubmit
        },
        errorItems
    };
}