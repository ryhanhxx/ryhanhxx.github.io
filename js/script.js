function toggleImageDisplayUi() {
    const uiSections = ['idImg1', 'idImg2'];
    const graphicSections = ['idImg3', 'idImg4', 'idImg5', 'idImg6'];
  
    uiSections.forEach(id => document.getElementById(id).style.display = 'flex');
    graphicSections.forEach(id => document.getElementById(id).style.display = 'none');
  }
  
  function toggleImageDisplayVec() {
    const uiSections = ['idImg1', 'idImg2'];
    const graphicSections = ['idImg3', 'idImg4', 'idImg5', 'idImg6'];
  
    uiSections.forEach(id => document.getElementById(id).style.display = 'none');
    graphicSections.forEach(id => document.getElementById(id).style.display = 'flex');
  }