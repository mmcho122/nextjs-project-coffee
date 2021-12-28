// axios 라이브러리를 사용해서 어디서든 사용할 수 있도록 함
import axios from 'axios';


export const fetcher = (url: string) => axios.get(url).then(res => res.data);