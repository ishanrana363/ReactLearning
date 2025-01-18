import AdminDashbord from "./AdminDashbord";
import UserDashboard from "./UserDashboard";

export default function CondictionalRendering() {
    let isAdmin = false;
    let data;
    if (isAdmin) {
        data = <AdminDashbord></AdminDashbord>
    }else{
        data = <UserDashboard></UserDashboard>
    }
    return (
        <div>
            <h1>condictional rendering</h1>
            {
                data
            }
        </div>
    )
}
