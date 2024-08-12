export const GifGrid = ({category}) => {

    const gifs = [1,2,3,4];

    return (
        <div key={category}>
            <h3>{category}</h3>
            {
                gifs.map((gif)=>(
                    <p>{gif}</p>
                ))
            }
        </div>
    )
}
