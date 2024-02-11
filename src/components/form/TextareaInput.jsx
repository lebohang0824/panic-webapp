const TextareaInput = ({ name, placeholder }) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            rows={2}></textarea>
    );
};

export default TextareaInput;
