const newMessage = {
    message : 'hola',
    title : 'goku'
};

const saludar = (nombre) => `Hola ${nombre}`;

export const FirstApp = () => {

    return (
        <>
            <h1>{saludar('Anthony')}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>Soy un parrafo</p>
        </>
    )
}
