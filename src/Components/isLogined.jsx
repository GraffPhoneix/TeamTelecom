import DataBase from "../DataBase";

export default function isLogined() {
    if (!DataBase.isLogined) {
        location.href = 'http://localhost:5173/register'
    }
}