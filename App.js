import axios from 'axios'

function App(){
    const baseURL='https://www.codechef.com/users/lilli_123'
    const getdata=()=>{
           console.log('getting data....')
           axios.get(baseURL)
           .then((res)=>{
               const responseData=res.data
               handleData(responseData)
           })
    }
    const DOMParser=require('dom-parser')
    const parse=new DOMParser();
    const handleData=(responseData)=>{
        const data=parse.parseFromString(responseData);
        const username=data.getElementsByClassName('m-username--link')[0].innerHTML
        const name=data.getElementsByClassName('user-details-container')[0].getElementsByTagName('h1')[0].innerHTML;
        const rating =data.getElementsByClassName('rating-number')[0].innerHTML;
        const ProblemsSolved=data.getElementsByClassName('rating-data-section problems-solved')[0].getElementsByTagName('h5')[0].innerHTML;
        console.log(username)
        console.log(name)
        console.log(rating)
        console.log(ProblemsSolved.slice(14,17))
    }
    return(
        <>
        <h3>Welcome to axios</h3>
        <button onClick={getdata}>GET</button>
        </>
    )
}
export default App;