import "bootstrap/dist/css/bootstrap.min.css";
import DocumentsCardComponent from "../components/DocumentsCardComponent";
import ScrollToTop from "../components/ScrollToTop";

function DocumentsPage() {
  return (
    <div>
      <ScrollToTop />
      <DocumentsCardComponent />
    </div>
  );
}

export default DocumentsPage;
