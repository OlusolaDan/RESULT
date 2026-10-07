const subjectRowsContainer = document.getElementById('subjectRowsContainer');
const addSubjectBtn = document.getElementById('addSubjectBtn');
const resultForm = document.getElementById('resultForm');

function autoFillRemark(dropdownId, targetInputId) {
    const dropdown = document.getElementById(dropdownId);
    const targetInput = document.getElementById(targetInputId);
    if (dropdown.value) {
        targetInput.value = dropdown.value;
    }
}

addSubjectBtn.addEventListener('click', () => {
    const newRow = document.createElement('div');
    newRow.className = 'subject-row';
    newRow.innerHTML = `
        <input type="text" class="subject-name" placeholder="Subject Name" required>
        <input type="number" class="test-score" placeholder="Test (40)" min="0" max="40" required>
        <input type="number" class="exam-score" placeholder="Exam (60)" min="0" max="60" required>
        <button type="button" class="btn-remove" onclick="removeRow(this)">&times;</button>
    `;
    subjectRowsContainer.appendChild(newRow);
});

function removeRow(button) {
    const rows = subjectRowsContainer.getElementsByClassName('subject-row');
    if (rows.length > 1) {
        button.parentElement.remove();
    } else {
        alert("You must include at least one subject.");
    }
}

function calculateGrade(total) {
    if (total >= 75) return 'A';
    if (total >= 65) return 'B';
    if (total >= 50) return 'C';
    if (total >= 40) return 'D';
    return 'F';
}

resultForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Gather Demographic Strings
    const name = document.getElementById('studentName').value.toUpperCase();
    const adm = (document.getElementById('admissionNum').value || 'N/A').toUpperCase();
    const className = document.getElementById('className').value.toUpperCase();
    const age = document.getElementById('studentAge').value || '-';
    const sex = document.getElementById('studentSex').value;
    const position = document.getElementById('classPosition').value || 'Not Computed';
    const academicYear = document.getElementById('academicYear').value;
    const term = document.getElementById('term').value.toUpperCase();

    const opened = document.getElementById('timesOpened').value || '-';
    const present = document.getElementById('timesPresent').value || '-';

    // 2. Loop Through Academic Input Rows and Compute Metrics
    const names = document.querySelectorAll('.subject-name');
    const tests = document.querySelectorAll('.test-score');
    const exams = document.querySelectorAll('.exam-score');
    
    let subjectRowsHtml = '';
    let totalAccumulated = 0;
    
    for (let i = 0; i < names.length; i++) {
        const testVal = parseFloat(tests[i].value) || 0;
        const examVal = parseFloat(exams[i].value) || 0;
        const totalVal = testVal + examVal;
        totalAccumulated += totalVal;

        subjectRowsHtml += `
            <tr>
                <td style="text-align: center;">${i + 1}</td>
                <td><strong>${names[i].value.toUpperCase()}</strong></td>
                <td style="text-align: center;">${testVal}</td>
                <td style="text-align: center;">${examVal}</td>
                <td style="text-align: center;"><strong>${totalVal}</strong></td>
                <td style="text-align: center;"><strong>${calculateGrade(totalVal)}</strong></td>
            </tr>
        `;
    }

    const calculatedAvg = totalAccumulated / names.length;
    const overallOutcome = calculatedAvg >= 40 ? "PASSED / PROMOTED" : "HELD BACK";

    // 3. Process Psychomotor Domain Ratings Checklist Rows
    let psychomotorRowsHtml = '';
    document.querySelectorAll('.psychomotor-check').forEach((checkbox, index) => {
        if (checkbox.checked) {
            const ratingValue = document.querySelectorAll('.psychomotor-rating')[index].value;
            psychomotorRowsHtml += `<tr><td>${checkbox.value}</td><td style="text-align:center; font-weight:bold;">${ratingValue}</td></tr>`;
        }
    });

    // 4. Process Affective Domain Ratings Checklist Rows
    let affectiveRowsHtml = '';
    document.querySelectorAll('.affective-check').forEach((checkbox, index) => {
        if (checkbox.checked) {
            const ratingValue = document.querySelectorAll('.affective-rating')[index].value;
            affectiveRowsHtml += `<tr><td>${checkbox.value}</td><td style="text-align:center; font-weight:bold;">${ratingValue}</td></tr>`;
        }
    });

    // 5. Build Comments/Remarks Context Variables
    const teacherRemarks = document.getElementById('teacherRemarksCustom').value || "No specific comment provided.";
    const principalRemarks = document.getElementById('principalRemarksCustom').value || "No dynamic observation recommendation logged.";

    // 6. Generate the Complete Standalone Report Document Frame with specific School Header Branding
    const reportHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>${name} - ${term} Terminal Report</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="report-view-window">
        <div class="report-card">
            
            <div class="report-header-container">
                <div class="logo-placeholder"><span>SCHOOL<br>LOGO</span></div>
                <div class="report-header-text">
                    <h1>OLBHARMS HEIGHT SCHOOL</h1>
                    <p class="school-address">22, Ashaolu Street, Off Keke, Agege, Lagos</p>
                    <h2 class="report-title">ACADEMIC TERMINAL REPORT</h2>
                    <h3>- ${term} RESULT SHEET -</h3>
                </div>
                <div class="logo-placeholder visibility-hidden"></div>
            </div>

            <div class="student-info-grid">
                <div><strong>NAME:</strong> <span>${name}</span></div>
                <div><strong>ADM. NO:</strong> <span>${adm}</span></div>
                <div><strong>CLASS:</strong> <span>${className}</span></div>
                <div><strong>AGE / SEX:</strong> <span>${age} / ${sex}</span></div>
                <div><strong>YEAR:</strong> <span>${academicYear}</span></div>
                <div><strong>TERM:</strong> <span>${term}</span></div>
                <div><strong>POSITION:</strong> <span>${position}</span></div>
                <div><strong>ATTENDANCE:</strong> <span>Present: ${present} / Opened: ${opened}</span></div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th style="width: 8%; text-align: center;">S/N</th>
                        <th style="width: 44%;">Subject Title</th>
                        <th style="width: 12%; text-align: center;">Test (40)</th>
                        <th style="width: 12%; text-align: center;">Exam (60)</th>
                        <th style="width: 12%; text-align: center;">Total (100)</th>
                        <th style="width: 12%; text-align: center;">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    ${subjectRowsHtml}
                </tbody>
            </table>

            <div class="summary-box">
                <div><strong>Total Score:</strong> <span>${totalAccumulated.toFixed(1)}</span></div>
                <div><strong>Average Score:</strong> <span>${calculatedAvg.toFixed(2)}%</span></div>
                <div><strong>Overall Outcome:</strong> <span>${overallOutcome}</span></div>
            </div>

            <div class="behavioral-report-grid">
                <div class="report-block">
                    <h4>PSYCHOMOTOR DOMAIN (SKILLS)</h4>
                    <table class="nested-table">
                        <thead><tr><th>Skill/Trait</th><th style="text-align: center; width: 35%;">Rating</th></tr></thead>
                        <tbody>${psychomotorRowsHtml}</tbody>
                    </table>
                </div>
                <div class="report-block">
                    <h4>AFFECTIVE DOMAIN</h4>
                    <table class="nested-table">
                        <thead><tr><th>Behavioral Trait</th><th style="text-align: center; width: 35%;">Rating</th></tr></thead>
                        <tbody>${affectiveRowsHtml}</tbody>
                    </table>
                </div>
            </div>

            <div class="key-legend-box">
                <strong>KEY TO OBSERVABLE BEHAVIOUR:</strong>
                <div class="key-items">
                    <span>5 - Excellent</span>
                    <span>4 - High</span>
                    <span>3 - Acceptable</span>
                    <span>2 - Minimal</span>
                    <span>1 - None</span>
                </div>
            </div>

            <div class="remarks-display-section">
                <div class="remark-output-item">
                    <strong>Class Teacher's Remarks:</strong>
                    <p>${teacherRemarks}</p>
                </div>
                <div class="remark-output-item">
                    <strong>Principal's Remarks:</strong>
                    <p>${principalRemarks}</p>
                </div>
            </div>

            <div class="signatures-container">
                <div class="signature-box">
                    <div class="sig-line"></div>
                    <span>Class Teacher's Signature</span>
                </div>
                <div class="signature-box">
                    <div class="sig-line"></div>
                    <span>Principal's Signature & Date</span>
                </div>
                <div class="signature-box stamp-box">
                    <div class="stamp-circle">OFFICIAL STAMP</div>
                </div>
            </div>

        </div>
    </body>
    </html>
    `;

    // 7. Inject and Open Stream dynamically in a New Browser Tab Window Context
    const resultWindow = window.open('', '_blank');
    if (resultWindow) {
        resultWindow.document.open();
        resultWindow.document.write(reportHTML);
        resultWindow.document.close();
    } else {
        alert("Pop-up blocked! Please allow popups for this portal to view the generated result sheet.");
    }
});
