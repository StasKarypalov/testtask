export default function Button({ customClass  }){
    return(
        <button className={` ${customClass}`}>
        {customClass}
        </button>
    )
}