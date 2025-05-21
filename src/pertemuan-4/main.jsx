import { createRoot } from "react-dom/client";
import './tailwind.css';
import FrameWorkList from "./components/FrameworkList";
import FrameworkListSearchFilter  from "./components/Responsive";
import BestPracticeState from "./components/BestPracticeState"
import Resposive from "./components/Responsive"
import Latihan from "./components/Latihan"

createRoot(document.getElementById("root"))
    .render(
        <div>
            {/* <FrameWorkList/> */}
            {/* <FrameworkListSearchFilter/> */}
            <Latihan/>
        </div>
    )