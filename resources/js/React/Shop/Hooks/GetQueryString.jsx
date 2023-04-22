import {useLocation} from "react-router-dom";

export const GetQueryString = () => {

    const location = useLocation()
    let search = {};
    if (location.search !== ''){
        const string =location.search.replace('?' , '').split('&')
        for (let i=0; i<string.length; i++){
            let newString = string[i].split('=')
            if (!Object.keys(search).includes(newString[0])){
                search = {...search , [newString[0]]:[newString[1]] }
            }else {
                search[newString[0]].push(newString[1])
            }
        }
    }
    return search;
}

