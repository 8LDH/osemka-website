import "bootstrap/dist/css/bootstrap.min.css";
import KomendaProfileComponent from "../components/KomendaProfileComponent";
import "../styles/ProfileImageStyles.css";

function DruzynaPage() {
  return (
    <div>
      <h1>Nasza Drużyna</h1>
        <h2>Temat Roku: xxxxx</h2>
        <h3>Komenda</h3>
        <div className="image-container">
        <KomendaProfileComponent className="centered-image"  />
        </div>
        </div>
  );
}

export default DruzynaPage;
