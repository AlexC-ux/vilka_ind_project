export default function YellowText(text:string|Element){
    return <div
    className='yellowText'
    style={{
        display: "inline-flex"
    }}
>{`${text}`}</div>
}