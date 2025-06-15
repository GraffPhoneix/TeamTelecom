import RegisterByQR from "../Components/Register-by-QR";
import RegisterForm from "../Components/Register-form";
import RegisterHeader from "../Components/Register-header";

export default function Register() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 space-y-6">
                    <RegisterHeader />
                    <RegisterForm />
                </div>
                <RegisterByQR />
            </div>
        </div>
    );
}
