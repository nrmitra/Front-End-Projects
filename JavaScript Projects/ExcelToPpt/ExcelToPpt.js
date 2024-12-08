function pasteExcelToPowerPoint() {

    // Access Excel application
    var excelApp = new ActiveXObject("Excel.Application");

    var excelWorkbook = excelApp.Workbooks.Open("/Users/neelratanmitra/Downloads/CatMolBrand_BasePerCapita_Template (62).xlsx"); // Replace with your Excel file path
    var excelWorksheet = excelWorkbook.Worksheets("Sheet1"); // Replace with your sheet name

    var excelRange = excelWorksheet.Range("A1:C10"); // Select the range to copy
    excelRange.Copy();

    // Access PowerPoint application
    var pptApp = new ActiveXObject("PowerPoint.Application");

    // Open the existing PowerPoint presentation (provide your path here)
    var pptPresentation = pptApp.Presentations.Open("/Users/neelratanmitra/Documents/C MARC/C MARC Differentiated services.pptx");  // Path to the existing PowerPoint file

    // Add a new slide to the existing presentation
    var pptSlide = pptPresentation.Slides.Add(pptPresentation.Slides.Count + 1, 1); // Add a new slide at the end (1 = ppLayoutText)

    // Paste as OLE object (embedded Excel object)
    pptSlide.Shapes.PasteSpecial(0, 10); // 10 = ppPasteOLEObject

    // Save the presentation with the embedded content
    pptPresentation.Save();

    // Close the applications
    excelApp.Quit();
    pptApp.Quit();

}

pasteExcelToPowerPoint();
