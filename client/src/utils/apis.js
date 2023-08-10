import axios from 'axios'


export const fetchPost=async()=>{
   const {data}=await axios.get('https://ai-image-generator-nu.vercel.app/api/v1/post')
   return data 
    
}

export const addPost=async(form)=>{
    const {data}=await axios.post('post',form)
    return data;
}

export const createPost=async(prompt)=>{
    const {data}=await axios.post('dalle',prompt)
    return data;
}