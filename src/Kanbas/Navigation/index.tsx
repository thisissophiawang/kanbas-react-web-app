import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaCog } from "react-icons/fa";  // Importing the gear icon
import "../styles.css";

export default function KanbasNavigation() {
    return (
        <div style={{ width: 120 }} id="wd-kanbas-navigation" className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-neu-link" href="https://www.northeastern.edu/">
                <img src="/images/NEU.png" width="75px" alt="Northeastern University" />
            </a>
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-account-link" href="#/Kanbas/Account">
                <FaRegCircleUser className="fs-1 text text-white" /><br />
                Account
            </a>
            <a className="list-group-item bg-white text-danger border-0 text-center" id="wd-dashboard-link" href="#/Kanbas/Dashboard">
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </a>
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-course-link" href="#/Kanbas/Courses">
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </a>
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-calendar-link" href="#/Kanbas/Calendar">
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </a>
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-inbox-link" href="#/Kanbas/Inbox">
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </a>
            <a className="list-group-item bg-black text-white border-0 text-center" id="wd-labs-link" href="#/Labs">
                <FaCog className="fs-1 text-danger" /><br />  {/* Using the gear icon */}
                Labs
            </a>
        </div>
    );
}
