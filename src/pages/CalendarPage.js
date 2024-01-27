import "bootstrap/dist/css/bootstrap.min.css";
import CalendarComponent from "../components/CalendarComponent";
import ScrollToTop from "../components/ScrollToTop";

function CalendarPage() {
  return (
    <div>
      <ScrollToTop />
      <CalendarComponent />
    </div>
  );
}

export default CalendarPage;
