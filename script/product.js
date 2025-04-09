// products.js
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

// Adicionar produto
export const addProduct = async (productData) => {
    try {
        const docRef = await addDoc(collection(db, "products"), productData);
        return docRef.id;
    } catch (e) {
        console.error("Erro ao adicionar: ", e);
    }
};

// Listar todos os produtos
export const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Deletar produto
export const deleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
};

// products.js (adicione isto)
import {
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const storage = getStorage();

export const uploadImage = async (file) => {
    const storageRef = ref(storage, `products/${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
};