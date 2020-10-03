import firebase from 'firebase/app'
import 'firebase/firestore'
import initFirebase from '../auth/initFirebase'

initFirebase()

export const setRedemption = async (details) => {
    return await firebase.firestore().collection('redeems')
        .add({
            ...details,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
            // console.info('Success!');
            return true;
        })
        .catch((error) => {
            // console.error("Error adding document: ", error);
            return false;
        });
};

export const getRedemption = async (phone) => {
    let q = firebase.firestore().collection('redeems')
                .where('phone', '==', phone)
                .orderBy('timestamp', 'desc')
    
    return await q.get()
        .then(querySnapshot => {
            let d = querySnapshot.docs[0].data().timestamp.toDate()
            let redeemedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() 

            return {
                date: redeemedDate,
                size: querySnapshot.size
            }
        })
        .catch((err) => {
            // console.log(`Encountered error: ${err}`);
            return false;
        });
};
