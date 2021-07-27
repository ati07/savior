// import DocViewer,{MSDocRenderer} from "react-doc-viewer";
import DocViewer,{DocViewerRenderers } from "react-doc-viewer";


 
export default function DocReader() {
  const docs = [
    { uri: "http://www.africau.edu/images/default/sample.pdf"},
    { uri: require("./Zillow-Redfin Scrapers - Req Sheet.docx") }, // Local File
  ];
 
  return (
  
  <DocViewer documents={docs} pluginRenderers={DocViewerRenderers } 
  theme={{
    primary: "#5296d8",
    secondary: "#ffffff",
    tertiary: "#5296d899",
    text_primary: "#ffffff",
    text_secondary: "#5296d8",
    text_tertiary: "#00000099",
    disableThemeScrollbar: false,
  }}/>
  
  );
}