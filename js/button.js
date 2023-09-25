function openResumeFolder() {
    window.open('./pages/resume.html', '_blank');
}

function downloadResume() {
const fileUrl = './data/resume.pdf';
const fileName = 'Cinense-Josh-V-resume.pdf';

fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
    });
}