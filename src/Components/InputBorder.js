export default function InputBorder(props){
    const [inputValue, setInputValue] = useState("")
    function setValue(){
        props.setValue(inputValue)
    }
    return(
        <input type="text"  class="border-iccc-red border-2 text-iccc-red"
            onChange={e=> {console.log(e); setInputValue(e)}}>

        </input>
    )
}