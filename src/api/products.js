import { collection, 
    getDocs, 
    getDoc,
    doc,
    where,
    query,
    limit,
    addDoc } from "firebase/firestore"; 
import { bd } from './config';

const itemsRef = collection(bd, 'items');

export const getProducts = async (categoria) =>{
const products = []    
   
const q = categoria
? query(itemsRef, where("categoria", "==", categoria))
: itemsRef;

const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
   products.push({...doc.data(), id: doc.id})
})

return products;
}

export const getProduct = async (productId) =>{
const document = doc(bd,'items',productId);
const snapDoc = await getDoc(document)

if (snapDoc.exists()) {
   return({id: snapDoc.id, ...snapDoc.data()})
}
return null;

}

export const updateManyProducts = (a) =>
{

}