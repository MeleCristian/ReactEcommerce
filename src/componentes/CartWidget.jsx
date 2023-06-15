import imagen from "../assets/cart.png"
const style={
    img:{
        height:"2rem",
        width:"auto",
    },
    span:{
        color:"white",
        paddingLeft: 5,
    },
}
export const Cart= ()=>(
    <>
    <img src={imagen} style={style.img}alt="" />
    <span style={style.span}>0</span>
    </>
)