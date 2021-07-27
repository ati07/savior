import React, { useRef, useEffect,useState } from 'react';
import WebViewer from '@pdftron/webviewer';
import './Pdftron.css'
import Loading from '../Loading/Loading'

// import './App.css';

const Pdftron = ({url}) => {
  const [loading, setLoading] = useState(false)
  const viewer = useRef(null);
//  console.log("pdfurl", url)
  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: `${url}`,
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 400;
        rectangleAnnot.Y = 450;
        rectangleAnnot.Width = 400;
        rectangleAnnot.Height = 150;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
        // setLoading(true);
      })
      
    });
    
  }, []);

  return (
    <div className="Pdftron">
      <div className="header">React sample</div>
{!loading ? <div className="webviewer" ref={viewer}></div>:<Loading/>}
    </div>
  );
};

export default Pdftron;
