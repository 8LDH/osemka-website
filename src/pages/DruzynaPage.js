import "bootstrap/dist/css/bootstrap.min.css";
import KomendaProfileComponent from "../components/KomendaProfileComponent";
import "../styles/ProfileImageStyles.css";
import ZastepyCardComponent from "../components/ZastepyCardComponent";

function DruzynaPage() {
  return (
    <div>
      <h1>Nasza Drużyna</h1>
      <h2>Temat Roku: xxxxx</h2>
      <h3>Komenda</h3>
      <div className="image-container">
        <KomendaProfileComponent className="centered-image" />
        <h3>Zastępy</h3>
        <div></div>
        <ZastepyCardComponent />
      </div>
    </div>
  );
}

export default DruzynaPage;
