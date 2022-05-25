import db from '../../firebase.js';
import { getFirestore, collection, addDoc, doc, getDocs, updateDoc, increment } from "firebase/firestore";

function AddEvent (props){

    addDoc(doc(db, "events"), {
        name: props.name,
        date: this.fromDate(new Date(props.date)),
        descript: props.des
    });


}

export default AddEvent;