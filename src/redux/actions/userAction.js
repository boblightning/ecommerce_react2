
export const loginAction=(data)=>{
    console.log("DARI DATA UI/COMPONENT==>>",data)
    return{
        type:"LOGIN_SUCCESS", //ibaratnya nomor resi
        payload: data //menampung data dari FrontEnd lalu meneruskan ke properti
    }
}