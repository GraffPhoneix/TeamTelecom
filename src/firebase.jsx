import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, set, push, update } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCg2o_GslFcmDTHfjun2bxucUNYlEnOpaQ",
    authDomain: "teamtelecom-17a6b.firebaseapp.com",
    databaseURL: "https://teamtelecom-17a6b-default-rtdb.firebaseio.com",
    projectId: "teamtelecom-17a6b",
    storageBucket: "teamtelecom-17a6b.appspot.com",
    messagingSenderId: "176630174445",
    appId: "1:176630174445:web:c163137eeb896a4c9572e4",
    measurementId: "G-CJ79DWYQWG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const fetchData = (path, callback) => {
    const pathRef = ref(db, path);
    onValue(pathRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
            const formatted = Object.entries(data).map(([id, value]) => ({
                id,
                ...value
            }));
            callback(formatted);
        }
    });
};

// Добавление
export const addData = (path, data) => {
    const pathRef = ref(db, path);
    return push(pathRef, data);
};

// Установка, перезапись
export const setData = (path, data) => {
    const pathRef = ref(db, path);
    return set(pathRef, data);
};

// Обновление
export const updateData = (path, newData) => {
    const pathRef = ref(db, path);
    return update(pathRef, newData);
};

export { db };
