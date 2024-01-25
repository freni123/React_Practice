import { collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../config";

export const saveItem = async (data) => {
  console.log(data);
  await setDoc(doc(firestore, "test", `${Date.now()}`), data, { merge: true });
};
/* --------------------------------- getdata -------------------------------- */
export const getAllData = async () => {
  const allItems = await getDocs(collection(firestore, "test"));
  allItems.docs.map((doc) => console.log(doc.data()));
};

/* ------------------------------- delete data ------------------------------ */
export const deleteData = async (id) => {
  const deleteItem = doc(collection(firestore, "test"), id);
  await deleteDoc(deleteItem);
};
/* ------------------------------- update data ------------------------------ */
export const updateData = async (id, newData) => {
  const updateItem = doc(collection(firestore, "test"), id);
  await updateDoc(updateItem, newData);
};





