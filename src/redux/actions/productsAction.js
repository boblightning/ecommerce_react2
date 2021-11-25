
export const productAction=(data)=>{
    console.log("DARI DATA UI/COMPONENT==>>",data)
    return{
        type:"DATA_PRODUCT", //ibaratnya nomor resi
        payload: data //menampung data dari FrontEnd lalu meneruskan ke properti
    }
}