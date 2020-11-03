
function excelExport(blob_data, filename:string) {
  const a = document.createElement('a');
  a.href = window.URL.createObjectURL(blob_data);
  a.download = `${filename}.xlsx`;
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

export default excelExport;
